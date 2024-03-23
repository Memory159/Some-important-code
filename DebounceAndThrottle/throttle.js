// 节流
// 第一种写法:
// 通过一个变量来判断当前函数的执行状态，形成闭包
/**
 * 
 * @param {*} func 需要执行的函数
 * @param {*} delay 延迟执行的时间
 * @returns 
 */
function throttle1(func, delay) {
    let timer = null
    let shouldExecute = true
    return function(...args) {
        if (!shouldExecute) {
            return
        }
        shouldExecute = false

        timer = setTimeout(function() {
            func.apply(this, args)
            shouldExecute = true
        }, delay)
    }
}
/**
 * 具体实现流程:
 * 使用 setTimeout 实现节流。
 * 在函数被调用时，设置一个延迟定时器，并在延迟时间结束后执行函数。
 * 通过一个标志位 shouldExecute 控制是否执行函数，在延迟时间内连续调用函数只会执行一次。
 * 一旦函数执行完毕，将 shouldExecute 设置为 true，表示可以再次执行函数。
 * 优点是延迟时间可以精确控制，缺点是在延迟时间内的连续函数调用会被忽略。
 */


// 第二种写法:
// 通过两个时间戳来判断当前函数的执行状态，也会形成闭包
/**
 * 
 * @param {*} func 需要执行的函数
 * @param {*} delay 延迟执行的时间
 * @returns 
 */
function throttle2(func, delay) {
    let timer = null
    let begin = new Date().getTime()
    return function() {
        let self = this
        let argu = arguments
        let current = new Date().getTime()
        clearTimeout(timer)
        if (current - begin >= delay) {
            func.apply(self, argu)
            begin = current
        } else {
            timer = setTimeout(function() {
                func.apply(self, argu)
            }, delay)
        }
    }
}
/**
 * 具体实现流程:
 * 使用计时器和时间戳实现节流。
 * 在函数被调用时，记录当前时间戳 current。
 * 如果当前时间戳距离上一次调用时间戳 begin 大于等于设定的延迟时间 delay，则立即执行函数，并更新 begin 的值为当前时间戳。
 * 如果当前时间戳距离上一次调用时间戳 begin 小于延迟时间 delay，则设置一个延迟定时器，在延迟时间结束后执行函数。
 * 优点是在延迟时间内的连续函数调用不会被忽略，缺点是延迟时间不是精确的，而是最小延迟时间和连续函数调用之间的时间差
 */


// 用来测试的方法
function test() {
    console.log('节流数据');
}
// 获取到页面的 dom 节点
let tt = document.querySelector('.testThrottle')

// 使用第一种方法实现节流
tt.addEventListener('click', throttle1(test, 2000))

// 使用第二种方法实现节流
tt.addEventListener('click', throttle2(test, 2000))