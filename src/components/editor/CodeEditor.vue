<script setup lang="ts">
import {ref, onMounted, watch} from 'vue';
import {EditorState} from "@codemirror/state"
import {EditorView, keymap} from "@codemirror/view"
import {defaultKeymap} from "@codemirror/commands"

const codeEditor = ref<HTMLDivElement | null>(null);
const props = defineProps<{
  content: string,
}>();
let view: EditorView;

onMounted(() => {
    let startState = EditorState.create({
      doc: props.content || '',
      extensions: [keymap.of(defaultKeymap)]
    })
    
    view = new EditorView({
      state: startState,
      parent: codeEditor.value!
    })
})

watch(() => props.content, (newContent) => {
  if (view && newContent !== undefined) {
    view.dispatch({
      changes: { from: 0, to: view.state.doc.length, insert: newContent }
    })
  }
})
</script>

<template>
    <div ref="codeEditor"></div>
</template>

<style scoped>
</style>