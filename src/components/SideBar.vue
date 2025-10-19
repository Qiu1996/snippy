<script setup lang="ts">
  const openSnippetEdit = () => {
    console.log('打開新增片段區域')
  }

</script>

<template>
  <div class="sideBar">
    <button @click="openSnippetEdit">新增</button>
  </div>
</template>

<style scoped>
  .sideBar{
    border: 1px solid black;
    width: 20vw;
    height: 100vh;
  }
</style>
