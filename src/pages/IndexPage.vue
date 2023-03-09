<template>
  <q-page>
    <div class="check-date">
      <BtnDate v-model="checkDate" />
      {{moment(checkDate).format('YYYY-MM')}}
    </div>
    <q-table
      :rows="[...rows, totalRow]"
      :columns="columns"
      bordered
      :pagination="{rowsPerPage: 50}"
      @row-click="handleRowClick"
    />
    <div id="echarts" style="height: 300px"></div>
    <br />
    <div class="btn-box">
      <q-btn class="full-width" color="green" @click="handleAdd">add</q-btn>
      <br />
      <br />
      <q-btn class="full-width" color="teal" to="/month">month</q-btn>
      <br />
      <br />
      <q-btn class="full-width" color="orange" to="/year">year</q-btn>
      <br />
      <br />
      <q-btn class="full-width" color="pink" to="/download">download</q-btn>
    </div>
    <q-dialog v-model="addShow">
      <q-card class="form-card">
        <q-card-section>
          <BtnDate v-model="formRow.date" />
          {{formRow.date}}
          <q-input v-model="formRow.in" label="In" />
          <q-input v-model="formRow.out" label="Out" />
          <q-input v-model="formRow.mark" label="Mark" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="cancel" v-close-popup />
          <q-btn label="OK" color="green" @click="handleSave" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="delConfirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">Do you want to delete this item ?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Delete" color="red" @click="handleDelete" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import moment from "moment";

import * as echarts from "echarts";
import BtnDate from "../components/BtnDate.vue";

const columns = ref([
  {
    field: "date",
    label: "Date",
    align: "center"
  },
  {
    field: "in",
    align: "center",
    label: "In"
  },
  {
    field: "out",
    align: "center",
    label: "Out"
  },
  {
    field: "mark",
    align: "center",
    label: "Mark"
  }
]);

const rows = ref([]);
const checkDate = ref(moment(new Date()).format("YYYY-MM"));
const formRow = ref({
  date: moment(new Date()).format("YYYY-MM-DD"),
  in: "",
  out: "",
  mark: ""
});
const totalRow = ref({});
const currentRow = ref({});
const addShow = ref(false);
const delConfirm = ref(false);

const dataKey = "data";

const handleAdd = () => {
  addShow.value = true;
};

const saveData = obj => {
  const { date } = obj;
  const arr = date.split("-");
  const year = arr[0];
  const month = arr[1];
  const day = arr[2];
  const sotrage = localStorage.getItem(dataKey);
  let data = {};
  if (sotrage) {
    data = JSON.parse(sotrage);
    if (data[year]) {
      if (data[year][month]) {
        data[year][month][day] = obj;
      } else {
        data[year][month] = {
          [day]: obj
        };
      }
    } else {
      data[year] = {
        [month]: {
          [day]: obj
        }
      };
    }
  } else {
    data[year] = {
      [month]: {
        [day]: obj
      }
    };
  }
  localStorage.setItem(dataKey, JSON.stringify(data));
};

const initEcharts = () => {
  const myChart = echarts.init(document.getElementById("echarts"));
  const dd = rows.value;
  const data = dd.map(i => i.in);
  const total = [data[0] * 1];
  data.reduce((j, k) => {
    total.push(j * 1 + k * 1);
    return j * 1 + k * 1;
  });
  myChart.setOption({
    title: {
      text: "In"
    },
    xAxis: {
      data: dd.map(i => i.date)
    },
    yAxis: {},
    series: [
      {
        name: "In",
        type: "line",
        data: total,
        smooth: true,
        tooltip: function(a) {
          return "a";
        }
      }
    ]
  });
};

const getData = () => {
  const dd = localStorage.getItem(dataKey);
  const dataArr = [];
  const totalData = {
    date: "total",
    in: 0,
    out: 0,
    mark: 0
  };
  if (dd) {
    const data = JSON.parse(dd);
    const arr = checkDate.value.split("-");
    const year = arr[0];
    const month = arr[1];

    if (data[year] && data[year][month]) {
      const obj = data[year][month];
      for (let key in obj) {
        const val = obj[key];
        const { in: _in, out, mark } = val;
        if (_in) totalData.in += _in * 1;
        if (out) totalData.out += out * 1;
        if (mark) totalData.mark += mark * 1;
        dataArr.unshift(val);
      }
    }
  }
  totalRow.value = totalData;
  rows.value = dataArr;
  initEcharts();
};

const delData = obj => {
  const { date } = obj;
  const arr = date.split("-");
  const year = arr[0];
  const month = arr[1];
  const day = arr[2];
  const data = JSON.parse(localStorage.getItem(dataKey));
  delete data[year][month][day];
  localStorage.setItem(dataKey, JSON.stringify(data));
};

const handleSave = () => {
  const obj = formRow.value;
  saveData(obj);
  getData();
  addShow.value = false;
};

const handleRowClick = (e, row) => {
  currentRow.value = row;
  delConfirm.value = true;
};

const handleDelete = () => {
  delData(currentRow.value);
  getData();
  delConfirm.value = false;
};

onMounted(() => {
  getData();
});
</script>
<style lang="scss" scoped>
.btn-box {
  padding: 20px;
}
.form-card {
  width: 100%;
  padding: 0 20px 20px;
}
.check-date {
  padding: 15px;
}
</style>
