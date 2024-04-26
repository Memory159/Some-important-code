<template>
    <button :disabled="count != 0">倒计时 {{ count || '' }}</button>
</template>

<script setup lang="ts">
    import {useCountDown} from "./hooks"
    // 倒计时
    const {count,countDown} = useCountDown()

    const sendCode = () => {
        console.log('发送验证码');
    }
</script>