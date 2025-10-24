<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {EditorState} from "@codemirror/state"
import {EditorView, keymap} from "@codemirror/view"
import {defaultKeymap} from "@codemirror/commands"

const codeEditor = ref<HTMLDivElement | null>(null);

onMounted(() => {
    let startState = EditorState.create({
      doc: "Hello World",
      extensions: [keymap.of(defaultKeymap)]
    })
    
    let view = new EditorView({
      state: startState,
      parent: codeEditor.value!
    })
})
</script>

<template>
    <div ref="codeEditor"></div>
</template>

<style scoped>
</style>