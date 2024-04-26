import { reactive } from "vue"

export function useVwSize() {
    const data = reactive({
        width: 0,
        height: 0
    })

    const getViewportSize = () => {
        data.width = document.body.clientWidth
        data.height = document.body.clientHeight
    }

    return {
        data,
        getViewportSize
    }
}