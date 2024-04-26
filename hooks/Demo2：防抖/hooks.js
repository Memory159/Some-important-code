/**
 * @params {Function} fn 需要防抖的函数 delay 防抖时间
 * @returns {Function} debounce 防抖函数
 * @example
 * const { debounce } = useDebounce()
 * const fn = () => { console.log('防抖') }
 * const debounceFn = debounce(fn, 1000)
 * debounceFn()
 */
export function useDebounce() {
    const debounce = (fn, delay) => {
        let timer = null
        return function() {
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                fn.apply(this, arguments)
            }, delay)
        }
    }
    return { debounce }
}