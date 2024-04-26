/**
 * @params {Function} fn 需要节流的函数 delay 节流时间
 * @returns {Function} throttle 节流函数
 * const { throttle } = useThrottle()
 * const fn = () => { console.log('节流') }
 * const throttleFn = throttle(fn, 1000)
 * throttleFn()
 */
export function useThrottle() {
    const throttle = (fn, delay) => {
        let timer = null
        return function() {
            if (!timer) {
                timer = setTimeout(() => {
                    fn.apply(this, arguments)
                    timer = null
                }, delay)
            }
        }
    }
    return { throttle }
}