<script setup lang="ts">
import SideBar from "./components/layout/SideBar.vue";
import EditArea from "./components/layout/EditArea.vue";
import TopBar from "./components/layout/TopBar.vue";
import { ref } from "vue";
import type { SnippetTab } from "./types/snippet";

const snippets = ref<SnippetTab[]>([]);
const currentSnippet = ref<SnippetTab | null>(null);

const loadSnippets = async () => {
  const result = await window.snippyAPI.getSnippets();
  snippets.value = result;
};

loadSnippets();

const selectSnippet = async (id: number) => {
  const result = await window.snippyAPI.getSnippetById(id);
  currentSnippet.value = result;
};

const addNewSnippet = async () => {
  try {
    const newSnippet = await window.snippyAPI.createSnippet();
    await loadSnippets();
    currentSnippet.value = newSnippet;
  } catch (err) {
    console.error("[app.vue] 新增錯誤:", err);
  }
};

const saveSnippet = async (id: number, content: string) => {
  await window.snippyAPI.updateSnippet(id, content);
};
</script>

<template>
  <TopBar />
  <div class="flex">
    <SideBar
      :snippets="snippets"
      @select-snippet="selectSnippet"
      @add-new-snippet="addNewSnippet"
      class="w-1/6 h-[calc(100vh-40px)] border"
    />
    <EditArea
      :snippet="currentSnippet"
      @save-snippet="saveSnippet"
      class="w-5/6 h-[calc(100vh-40px)] border"
    />
  </div>
</template>

<style scoped></style>
