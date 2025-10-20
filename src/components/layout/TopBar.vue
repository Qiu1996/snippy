<script setup lang="ts">
import Tab from "../ui/TabItem.vue"
</script>

<template>
  <div class="topBar flex gap-2 ml-[80px] py-1">
    <Tab />
  </div>
</template>

<style scopes>
  .topBar{
    height: 40px;
    overflow: auto;
  }

  .topBar::-webkit-scrollbar {
    display: none;
  }
</style>