<script setup lang="ts">
import CodeEditor from '../editor/CodeEditor.vue';
import type { SnippetTab } from '../../types/snippet';

const props = defineProps<{
  snippet: SnippetTab | null
}>()
</script>

<template>
  <CodeEditor :content="props.snippet?.content || ''" />
</template>

<style scoped>
</style>