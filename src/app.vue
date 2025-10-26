<script setup lang="ts">
import SideBar from './components/layout/SideBar.vue'
import EditArea from './components/layout/EditArea.vue'
import TopBar from './components/layout/TopBar.vue'
import { ref } from 'vue';

const snippets = ref([]);
const currentSnippet = ref(null);

const loadSnippetList = async () => {
  const result = await (window as any).snippyAPI.getSnippetsList();
  snippets.value = result;
}

loadSnippetList();

const loadSnippetById = async (id: number) => {
  const result = await (window as any).snippyAPI.getSnippetById(id);
  currentSnippet.value = result;
}

const addNewSnippet = async () => {
  try{
    const newSnippet = await (window as any).snippyAPI.createSnippet();
    await loadSnippetList();
    currentSnippet.value = newSnippet;
  }catch(err){
    console.error('[app.vue] 新增錯誤:', err);
  }
};

</script>

<template>
  <TopBar />
  <div class="flex">
    <SideBar
      :snippets="snippets" 
      @load-snippet-by-id="loadSnippetById"
      @add-new-snippet="addNewSnippet"
      class="w-[20vw] h-[100vh] border" />
    <EditArea 
      :snippet="currentSnippet"
      class="w-[80vw] h-[100vh] border" />
  </div>
</template>

<style scoped>
  
</style>