<script setup lang="ts">
import SideBar from './components/layout/SideBar.vue'
import EditArea from './components/layout/EditArea.vue'
import TopBar from './components/layout/TopBar.vue'
import {onMounted} from 'vue';

onMounted(() => {
  console.log(window.myAPI)  // 應該顯示 { desktop: true }
})
</script>

<template>
  <TopBar />
  <div class="flex">
    <SideBar class="w-[20vw] h-[100vh] border" />
    <EditArea class="w-[80vw] h-[100vh] border" />
  </div>
</template>

<style scoped>
  
</style>