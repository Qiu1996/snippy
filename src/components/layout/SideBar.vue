<script setup lang="ts">
import AddBtn from "../ui/AddBtn.vue";
import { ref } from "vue";

const emit = defineEmits(['loadSnippetById', 'addNewSnippet']);

interface snippetTab{
  id: number,
  title: string,
  file_path: string,
  created_at: string,
  updated_at: string
}

const props = defineProps<{
  snippets: snippetTab[]
}>();

</script>

<template>
  <div>
    <AddBtn 
      @addNewSnippet="emit('addNewSnippet')"
      class="border"
    />
    <div>
      <p 
        v-for="sni in props.snippets"
        @click="emit('loadSnippetById', sni.id)">
        {{ sni.title }}
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
