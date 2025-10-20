<script setup lang="ts">
import SideBar from './components/SideBar.vue'
import EditArea from './components/EditArea.vue'
import TopBar from './components/TopBar.vue'
</script>

<template>
  <TopBar />
  <div class="flex">
    <SideBar />
    <EditArea />
  </div>
</template>

<style scoped>
  
</style>