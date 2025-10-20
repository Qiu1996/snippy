<script setup lang="ts">
import SideBar from './components/layout/SideBar.vue'
import EditArea from './components/layout/EditArea.vue'
import TopBar from './components/layout/TopBar.vue'
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