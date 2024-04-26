<template>
    <button @click="throttleClick">节流点击</button>
</template>

<script>
    import {useThrottle} from './hooks'
    const {throttle} = useThrottle()

    const fn = () => {
        console.log('节流点击')
    }

    const throttleClick = throttle(fn,1000)
</script>