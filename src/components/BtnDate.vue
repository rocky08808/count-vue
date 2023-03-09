<template>
  <q-btn icon="event" round color="green">
    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
      <q-date v-model="date" mask="YYYY-MM-DD">
        <div class="row items-center justify-end q-gutter-sm">
          <q-btn label="ok" color="primary" v-close-popup />
        </div>
      </q-date>
    </q-popup-proxy>
  </q-btn>
</template>
<script setup>
import { watch, ref } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: ""
  }
});

const emits = defineEmits(["update:modelValue"]);

const date = ref(props.modelValue);

watch(date, () => {
  emits("update:modelValue", date);
});
</script>