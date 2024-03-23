// 防抖
// 第一种写法:普通写法
// 在执行事件之后，不会立即执行，而是等到定时器时间结束之后才开始执行
/**
 * 
 * @param {*} func 需要执行的函数
 * @param {*} delay 延迟执行的时间
 * @returns 
 */
function debounce(func, delay) {
    let timer = null
    return function() {
        clearTimeout(timer)
        var self = this
        argu = arguments
        timer = setTimeout(function() {
            func.apply(self, argu)
        }, delay);
    }
}
/**
 * 使用 setTimeout 实现防抖。
 * 在函数被调用时，清除之前设置的定时器。
 * 在延迟时间内连续调用函数时，会不断清除之前的定时器并重新设置新的定时器，确保只有在最后一次调用后的延迟时间结束后才会执行函数。
 * 通过闭包保存定时器变量，确保每次调用都使用同一个定时器。
 * 优点是简单易懂，缺点是无法立即触发函数，只有在延迟时间结束后才会执行函数。
 */


// 第二种写法:包含是否立即执行
// 在执行事件之后，会立即执行一次，剩下的时候，就是会在定时器结束才会继续执行
/**
 * 
 * @param {*} func 需要执行的函数 
 * @param {*} delay 延迟执行的时间
 * @param {*} triggleNow 是否立即执行 --> 布尔值
 * @returns 
 */
function debounce(func, delay, triggleNow) {
    var timer = null
    var debounced = function() {
        var self = this
        var argu = arguments
        if (timer) {
            clearTimeout(timer)
        }
        if (triggleNow) {
            var noTimer = !timer
            timer = setTimeout(function() {
                timer = null
            }, delay)
            if (noTimer) {
                func.apply(self, argu)
            }
        } else {
            timer = setTimeout(function() {
                func.apply(self, argu)
            }, delay)
        }

    }
    debounced.remove = function() {
        clearTimeout(timer)
        timer = null
    }
    return debounced
}
/**
 * 使用计时器和闭包实现防抖。
 * 在函数被调用时，清除之前设置的定时器。
 * 如果设置了 triggleNow 参数为 true，则在函数第一次被调用时立即执行函数，之后的连续调用会在延迟时间结束后才能再次触发函数。
 * 如果没有设置 triggleNow 或设置为 false，则在延迟时间结束后执行函数。
 * 通过闭包保存定时器变量和函数执行状态，确保只有符合条件的调用才能触发函数。
 * 通过 debounced.remove 方法可以手动移除定时器，取消防抖效果。
 * 优点是灵活性高，可以设置立即触发和手动移除定时器，缺点是稍显复杂。
 */

// 用来测试的方法
function test() {
    console.log('测试防抖');
}
// 获取到页面的 dom 节点
let de = document.querySelector('.testDebounce');
// 使用第一种方法实现防抖
de.addEventListener('click', debounce(test, 2000))

// 使用第二种方法实现防抖
de.addEventListener('click', debounce(test, 2000, true))