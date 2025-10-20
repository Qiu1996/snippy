<script setup lang="ts">
import SideBar from './components/layout/SideBar.vue'
import EditArea from './components/layout/EditArea.vue'
import TopBar from './components/layout/TopBar.vue'
import { ref } from 'vue';

interface Tab {
  id: number;
  title: string;
}

const tabs = ref<Tab[]>([]);

function addTab(){
  tabs.value.push({
    id: Date.now(),
    title: '未命名'
  });
}
</script>

<template>
  <TopBar :tabs="tabs" />
  <div class="flex">
    <SideBar @add-tab="addTab"/>
    <EditArea />
  </div>
</template>

<style scoped>
  
</style>