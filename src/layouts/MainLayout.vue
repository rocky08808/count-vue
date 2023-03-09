<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar>
        <q-btn dense color="primary" label="<返回" @click="handleBack" />
        <q-toolbar-title>Count</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const handleBack = () => {
  router.back();
};
</script>
