<template>
    <button @click="debounceClick">防抖点击</button>
</template>

<script>
    import {useDebounce} from './hooks'
    const {debounce} = useDebounce()

    const fn = () => {
        console.log('防抖点击')
    }
     const debounceClick = debounce(fn,1000)
</script>