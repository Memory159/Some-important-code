<template>
    <button @click="getViewportSize()">获取窗口大小</button>
    <div>
        <div>宽度：{{ data.width }}</div>
        <div>高度：{{ data.height }}</div>
    </div>
</template>

<script setup lang="ts">
    import {useVwSize} from "./hooks"
    const {data,getViewportSize} = useVwSize()
</script>