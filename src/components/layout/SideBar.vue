<script setup lang="ts">
  const emit = defineEmits(['add-tab']);
  

</script>

<template>
  <div class="sideBar">
    <button @click="emit('add-tab')">新增</button>
  </div>
</template>

<style scoped>
  .sideBar{
    border: 1px solid black;
    width: 20vw;
    height: 100vh;
  }
</style>
