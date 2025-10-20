<script setup lang="ts">
    const saveSnippet = () => {
        console.log('片段儲存');
    }

    const closeSnippet = () => {
        console.log('片段關閉');
    }
</script>

<template>
    <div class="btnsWrap">
        <button @click="saveSnippet">儲存</button>
        <button @click="closeSnippet">關閉</button>
    </div>
</template>

<style scoped>
    .btnsWrap{
        position: fixed;
        bottom: 0;
    }
    .btnsWrap button{
        border: 1px solid black;
        margin: 10px;
    }
</style>