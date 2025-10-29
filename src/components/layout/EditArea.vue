<script setup lang="ts">
import CodeEditor from "../editor/CodeEditor.vue";
import SaveBtn from "../ui/SaveBtn.vue";
import DeleteBtn from "../ui/DeleteBtn.vue";
import { ref } from "vue";
import type { SnippetTab } from "../../types/snippet";

const props = defineProps<{
  snippet: SnippetTab | null;
}>();
const emit = defineEmits<{
  saveSnippet: [id: number, content: string];
  deleteSnippet: [id: number];
}>();

const editorRef = ref<InstanceType<typeof CodeEditor> | null>(null);

const saveSnippet = () => {
  if (editorRef.value) {
    const content = editorRef.value.getContent();
    const id = props.snippet?.id;
    if (!id) return;
    emit("saveSnippet", id, content);
  }
};

const deleteSnippet = () => {
  const id = props.snippet?.id;
  if (!id) return;
  emit("deleteSnippet", id);
};
</script>

<template>
  <div>
    <p class="border h-8">
      {{ props.snippet?.file_path || "" }}
    </p>
    <div class="border h-[calc(100%-60px)] w-[100%] overflow-auto">
      <CodeEditor ref="editorRef" :content="props.snippet?.content || ''" />
    </div>
    <div class="border">
      <SaveBtn @click="saveSnippet" />
      <DeleteBtn @click="deleteSnippet" />
    </div>
  </div>
</template>

<style scoped></style>
