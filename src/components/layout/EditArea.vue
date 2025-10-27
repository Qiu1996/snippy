<script setup lang="ts">
import CodeEditor from "../editor/CodeEditor.vue";
import SaveBtn from "../ui/SaveBtn.vue";
import DeleteBtn from "../ui/DeleteBtn.vue";
import type { SnippetTab } from "../../types/snippet";

const props = defineProps<{
  snippet: SnippetTab | null;
}>();
</script>

<template>
  <div>
    <p class="border h-8">
      {{ props.snippet?.file_path || "" }}
    </p>
    <div class="border h-[calc(100%-60px)] w-[100%] overflow-auto">
      <CodeEditor :content="props.snippet?.content || ''" />
    </div>
    <div class="border">
      <SaveBtn />
      <DeleteBtn />
    </div>
  </div>
</template>

<style scoped></style>
