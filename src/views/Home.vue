<template>
  <div class="home">
<!--    <van-field label="用戶名" v-model="username" placeholder="用戶名"></van-field>-->
    <van-datetime-picker
        v-model="currentDate"
        type="year-month"
        title="选择年月"
        confirm-button-text="搜索"
        cancel-button-text=" "
        @change="getTableList"
        @confirm="getTableList"
    />
    <div>
      <CTable :columns="columns" :data="tableList" @trClick="handleDel"></CTable>
      <div v-if="tableList.length" class="total-box">
        total: <span :class="totalIncome > 0 ? 'red' : 'green'">{{ totalIncome }}</span> + <span :class="totalOther > 0 ? 'red' : 'green'">{{ totalOther }}</span> = <span :class="totalIncome + totalOther > 0 ? 'red' : 'green'">{{ totalIncome + totalOther }}</span>
      </div>
    </div>
    <div class="btn-box">
      <van-button type="primary" size="small" block @click="handleAdd">新增记录</van-button>
      <br>
      <van-button type="warning" size="small" block @click="handleShowMonth">查看月收益</van-button>
      <br>
      <van-button type="danger" size="small" block @click="handleCheckPool">资金池</van-button>
    </div>
    <van-popup ref="showMonth" v-model="showMonth" position="bottom">
      <van-field label="年份" v-model="year"></van-field>
      <CTable :columns="monthColumns" :data="monthList"></CTable>
      <div class="center">
        合计：<span :class="monthTotal > 0 ? 'red' : 'green'">{{ monthTotal }}</span>
      </div>
      <div class="mar16">
        <van-button round block type="warning" size="small" @click="handleMonthSearch">查询</van-button>
      </div>
    </van-popup>
    <van-popup ref="addPopup" v-model="showAdd" position="bottom">
      <van-form @submit="handleAddSubmit">
        <van-field label="日期">
          <template #input>
            <van-datetime-picker
                v-model="addData.date"
                cancel-button-text=" "
                type="month-day"
                title="选择月日"
            />
          </template>
        </van-field>
        <van-field label="收入" v-model="addData.income" placeholder="收入"></van-field>
        <van-field label="其他" v-model="addData.other" placeholder="其他"></van-field>
        <van-field label="日志" v-model="addData.log" placeholder="日志"></van-field>
        <div class="mar16">
          <van-button round block type="primary" size="small" native-type="submit">新增</van-button>
        </div>
      </van-form>
    </van-popup>
    <van-popup ref="pool" v-model="showPool" position="bottom">
      <CTable :columns="poolColumns" :data="poolList"></CTable>
      <br />
      <div class="mar16">
        <van-button round block type="primary" size="small" @click="handleAddPool">新增</van-button>
      </div>
    </van-popup>
    <van-dialog v-model="addPoolShow" title="等级" showCancelButton @confirm="handleAddPoolSubmit">
      <van-form>
        <van-field label="等级" v-model="addPoolForm.level" type="number" placeholder="等级"></van-field>
        <van-field label="资金池" v-model="addPoolForm.pool" type="number" placeholder="资金池"></van-field>
        <!-- <div class="mar16">
          <van-button round block type="primary" size="small" native-type="submit">确定</van-button>
        </div> -->
      </van-form>
    </van-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import moment from 'moment'
import { Toast, Dialog  } from 'vant'
import CTable from '@/components/Table.vue'
import { setLS, getLS, getData, setData, delData, formsName, setPool, getPool, delPool } from '@/utils/storage'

export default {
  name: 'Home',
  components: {
    CTable
  },
  data() {
    return {
      monthColumns: [
        { label: '日期', prop: 'date' },
        { label: '收入', prop: 'income', render(h, row) {
          let { income } = row
          income = income ? income * 1 : 0
          return h('span', { class: income > 0 ? 'red' : 'green' }, income)
        } },
        { label: '其他', prop: 'other', render(h, row) {
          let { other } = row
          other = other ? other * 1 : 0
          return h('span', { class: other > 0 ? 'red' : 'green' }, other)
        } },
        { label: '合计', prop: 'total', render(h, row) {
          let { total } = row
          total = total ? total * 1 : 0
          return h('span', { class: total > 0 ? 'red' : 'green' }, total)
        } }
      ],
      columns: [
        { label: '日期', prop: 'date' },
        { label: '收入', prop: 'income', render(h, row) {
          let { income } = row
          income = income ? income * 1 : 0
          return h('span', { class: income > 0 ? 'red' : 'green' }, income)
        } },
        { label: '其他', prop: 'other', render(h, row) {
          let { other } = row
          other = other ? other * 1 : 0
          return h('span', { class: other > 0 ? 'red' : 'green' }, other)
        } },
        { label: '日志', prop: 'log' },
      ],
      poolColumns: [
        { label: '等级', prop: 'level' },
        { label: '资金池', prop: 'pool' },
        { label: '操作', render: (h, row) => {
          return h('div', [
            h('span', { on: { click: () => this.handleEditPool(row) } }, ' 编辑 '),
            h('span', { on: { click: () => this.handlePoolDel(row) } }, ' 删除 ')
          ])
        } }
      ],
      tableList: [],
      monthList: [],
      poolList: [],
      addPoolForm: {
        level: '',
        pool: ''
      },
      currentDate: new Date(),
      addData: {
        date: new Date(),
        income: '',
        other: '',
        log: ''
      },
      username: '',
      showAdd: false,
      showMonth: false,
      showPool: false,
      addPoolShow: false,
      year: new Date().getFullYear(),
      totalOther: 0,
      totalIncome: 0,
      mTotalother: 0,
      mTotalIncome: 0
    }
  },
  created() {
    this.username = getLS('username')
    this.getTableList()
  },
  watch: {
    username() {
      setLS('username', this.username)
    }
  },
  computed: {
    monthTotal() {
      return this.mTotalIncome + this.mTotalother
    }
  },
  methods: {
    handleEditPool({ level, pool }) {
      this.addPoolForm.level = level
      this.addPoolForm.pool = pool
      this.addPoolShow = true
    },
    handlePoolDel({ level }) {
      Dialog.confirm({
        title: '删除',
        message: '删除该等级 ？'
      }).then(() => {
        delPool(level)
        Toast('删除成功')
        this.getPoolData()
      })
    },
    handleCheckPool() {
      this.showPool = true
      this.getPoolData()
    },
    handleAddPool() {
      this.addPoolForm.level = ''
      this.addPoolForm.pool = ''
      this.addPoolShow = true
    },
    handleAddPoolSubmit() {
      const { level, pool } = this.addPoolForm
      if (!level) return Toast('请输入等级')
      if (!pool) return Toast('请输入资金池')
      setPool(level, pool)
      Toast('操作成功')
      this.addPoolShow = false
      this.getPoolData()
    },
    getPoolData() {
      const pool = getPool()
      if (pool) {
        const list = []
        for(let level in pool) {
          const val = pool[level]
          if (level) {
            list.push({ level, pool: val })
          }
        }
        this.poolList = list
      }
    },
    handleDel(item) {
      this.$dialog.confirm({
        title: '确认',
        message: `删除${item.date}记录？`
      }).then(async () => {
        const formKey = moment(this.currentDate).format('YYYY-MM')
        delData(formKey, item.id)
        this.$notify({ type: 'success', message: '删除成功' })
        this.getTableList()
        // const { res } = await this.$api.delIncome({ username: this.username, formKey, id: item.id })
        // if (res) {
        //   this.$notify({ type: 'success', message: '删除成功' })
        //   this.getTableList()
        // }
      })
    },
    async getTableList() {
      let date
      const currentDate = this.currentDate
      if (currentDate) {
        date = new Date(currentDate)
      }
      date = moment(date || new Date()).format('YYYY-MM')
      // const { res } = await this.$api.getIncomeList({ date, username: this.username })
      const res = getData(date)
      if (res) {
        // const { data } = res
        const data = res
        let totalIncome = 0, totalOther = 0
        if (data.length > 0) {
          data.forEach(i => {
            totalIncome += i.income * 1 || 0
            totalOther += i.other * 1 || 0
          })
          data.push({ date: '总计', income: totalIncome, other: totalOther })
        }
        this.totalIncome = totalIncome
        this.totalOther = totalOther
        this.tableList = data
      }
    },
    handleMonthSearch() {
      const data = getLS(formsName)
      const year = `${this.year}`
      if (data) {
        const obj = {}
        const list = []
        for(let key in data) {
          const reg = new RegExp(year)
          reg.test(key) && (obj[key] = data[key])
        }
        for(let date in obj) {
          let income = 0, other = 0
          obj[date].forEach(i => {
            income += i.income * 1
            other += i.other * 1
          })
          list.push({ date, income, other, total: income + other })
        }
        if (list.length) {
          let totalIncome = 0, totalOther = 0
          list.forEach(i => {
            totalIncome += i.income
            totalOther += i.other
          })
          this.mTotalIncome = totalIncome
          this.mTotalother = totalOther
          list.push({ date: '总计', income: totalIncome, other: totalOther, total: totalIncome + totalOther })
        }
        this.monthList = list
      }
    },
    handleShowMonth() {
      this.showMonth = true
      this.handleMonthSearch()
    },
    handleAdd() {
      this.showAdd = true
    },
    async handleAddSubmit() {
      const { date } = this.addData
      if (!date) return this.$notify('选择日期')
      const formKey = moment(date).format('YYYY-MM')
      setData(formKey, { ...this.addData, date: moment(date).format('YYYY-MM-DD'), id: +new Date() })
      this.getTableList()
      this.$refs.addPopup.close()
      // const { res } = await this.$api.addIncome({ ...this.addData, date: moment(date).format('YYYY-MM-DD'), username: this.username, formKey })
      // if (res) {
      //   this.getTableList()
      //   this.$refs.addPopup.close()
      // }
    }
  }
}
</script>
<style scoped lang="scss">
.btn-box {
  margin: 20px;
  text-align: center;
}
.total-box {
  text-align: center;
  margin: 20px 0;
}
.mar16 {
  margin: 16px;
}
</style>
