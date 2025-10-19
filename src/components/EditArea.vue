<script setup lang="ts">
import CodeEditor from './CodeEditor.vue';
import MarkdownEditor from './MarkdownEditor.vue';
import EditBottons from './EditButtons.vue';
</script>

<template>
    <div class="editArea">
        <MarkdownEditor />
        <CodeEditor />
        <EditBottons />
    </div>
</template>

<style scoped>
    .editArea{
        width: 80vw;
        height: 100vh;
        overflow: auto;
        border: 1px solid black;
    }
</style>