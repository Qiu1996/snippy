<script setup lang="ts">
import CodeEditor from '../editor/CodeEditor.vue';
import MarkdownEditor from '../editor/MarkdownEditor.vue';
import EditButtons from '../ui/EditButtons.vue';
</script>

<template>
    <div class="editArea">
        <MarkdownEditor />
        <CodeEditor />
        <EditButtons />
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