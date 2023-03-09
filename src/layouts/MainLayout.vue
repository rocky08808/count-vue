<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar>
        <q-btn v-show="path !== '/'" dense color="primary" label="<返回" @click="handleBack" />
        <q-toolbar-title>Count</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { computed } from "vue";

const router = useRouter();
const route = useRoute();

const path = computed(() => {
  return route.path;
});

const handleBack = () => {
  router.back();
};
</script>
