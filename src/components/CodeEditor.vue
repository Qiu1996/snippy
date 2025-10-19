<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {EditorState} from "@codemirror/state"
import {EditorView, keymap} from "@codemirror/view"
import {defaultKeymap} from "@codemirror/commands"

const codeEditor = ref(null);

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
    <div class="codeEditArea">
        <div ref="codeEditor"></div>
    </div>
</template>

<style scoped>
    .codeEditArea{
        border: 1px solid black;
        height: 50vh;
    }
</style>