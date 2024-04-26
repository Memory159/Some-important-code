/**
 * @param {Number} second 倒计时秒数
 * @return {Number} count 倒计时秒数
 * @return {Function} countDown 倒计时函数
 * @example
 *  const { count, countDown } = useCountDown()
 *  countDown(60)
 * <div>{{ count }}</div>
 */
export function useCountDown() {
    const count = ref(0);
    const timer = ref(null)
    const countDown = (second = 60, ck = () => {}) => {
        if (count.value === 0 && timer.value === null) {
            ck()
            count.value = second
            timer.value = setInterval(() => {
                count.value--
                    if (count.value === 0) {
                        clearInterval(timer.value)
                        timer.value = null
                    }
            }, 1000)
        }
    }

    onBeforeMount(() => {
        timer.value && clearInterval(timer.value)
    })

    return {
        count,
        countDown
    }
}