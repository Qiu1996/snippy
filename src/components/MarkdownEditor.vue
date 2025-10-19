<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {EditorState} from "@codemirror/state"
import {EditorView, keymap} from "@codemirror/view"
import { markdown } from '@codemirror/lang-markdown'

const markdownEditor = ref(null);

onMounted(() => {
    let startState = EditorState.create({
      doc: "Hello World",
      extensions: [markdown()]
    })
    
    let view = new EditorView({
      state: startState,
      parent: markdownEditor.value!
    })
})
</script>

<template>
    <div class="markdownArea">
        <div ref="markdownEditor"></div>
    </div>
</template>

<style scoped>
.markdownArea{
    height: 50vh;
}
</style>