<template>
  <div class="clearcache">
    <q-btn class="full-width" color="purple" @click="handleShow">clear cache</q-btn>
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <span
            class="q-ml-sm warntips"
          >Warnning: clear cache will clear all data, are you sure you want to clear ?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn type="primary" label="Yes" color="primary" @click="handleClearCache" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Tips</div>
        </q-card-section>

        <q-card-section class="q-pt-none">Clear successfully!</q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script setup>
import { ref } from "vue";

const confirm = ref(false);
const alert = ref(false);

const handleShow = () => {
  confirm.value = true;
};

const handleClearCache = () => {
  localStorage.clear();
  confirm.value = false;
  alert.value = true;
};
</script>
<style lang="scss" scoped>
.clearcache {
  padding: 20px;
}
.warntips {
  color: red;
  font-size: 18px;
}
</style>