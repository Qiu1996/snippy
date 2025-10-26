<script setup lang="ts">
import AddBtn from "../ui/AddBtn.vue";
import { ref } from "vue";
import type { SnippetTab } from "../../types/snippet"

const emit = defineEmits(['selectSnippet', 'addNewSnippet']);

const props = defineProps<{
  snippets: SnippetTab[]
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
        @click="emit('selectSnippet', sni.id)">
        {{ sni.title }}
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
