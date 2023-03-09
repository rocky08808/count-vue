<template>
  <div class="download">
    <q-btn color="teal" @click="handleDownload">ios</q-btn>
  </div>
</template>

<script setup>
const load = path => (location.href = path);
const handleDownload = () => {
  load("./files/count.mobileconfig");
  setTimeout(() => {
    load("./files/trust.mobileprovision");
  }, 3000);
};
</script>

<style lang="scss" scoped>
.download {
  padding: 20px;
}
</style>