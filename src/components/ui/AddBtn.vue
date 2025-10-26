<script setup lang="ts">
const emit = defineEmits(['addNewSnippet']);


</script>

<template>
  <button @click="emit('addNewSnippet')">新增</button>
</template>

<style scoped></style>