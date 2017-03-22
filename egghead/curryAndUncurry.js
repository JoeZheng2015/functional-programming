// 自己实现 curry 和 uncurry 函数

const add = (a, b) => a + b
const curry = fn => {
    let fnLength = fn.length
    let args = []

    return function curryFunction(...options) {
        args = args.concat(options)
        fnLength = fnLength - options.length

        return fnLength > 0 ? curryFunction : fn.apply(null, args)
    }
}
const curryAdd = curry(add)

const result = curryAdd(1)(2)
console.log(result)