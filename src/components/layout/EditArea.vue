<script setup lang="ts">
import CodeEditor from '../editor/CodeEditor.vue';
const props = defineProps(['snippet'])
</script>

<template>
  <CodeEditor :modelValue="props.snippet?.content || ''" />
</template>

<style scoped>
</style>