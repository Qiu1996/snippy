<script setup lang="ts">
import TabItem from "../ui/TabItem.vue"

interface Tab {
  id: number;
  title: string;
}

defineProps<{
  tabs: Tab[]
}>()
</script>

<template>
  <div class="topBar flex gap-2 ml-[80px] py-1">
    <TabItem v-for="tab in tabs" :key="tab.id" />
  </div>
</template>

<style scoped>
  .topBar{
    height: 40px;
    overflow: auto;
  }

  .topBar::-webkit-scrollbar {
    display: none;
  }
</style>