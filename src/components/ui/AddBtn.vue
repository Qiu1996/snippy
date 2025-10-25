<script setup lang="ts">
const addNewSnippet = async () => {
  try{
    const result = await (window as any).snippyAPI.createSnippet();
  }catch(err){
    console.log('[AddBtn: 6 ]新增錯誤: ', err);
  }
};
</script>

<template>
  <button @click="addNewSnippet">新增</button>
</template>

<style scoped></style>