// 提取对象的 value
const R = require('ramda')
const data = {
    A: [1, 2],
    B: [3, 4],
}

// 函数编程
// const getValues = R.pipe(R.values, R.flatten)

// 非函数式
const getValues = obj => Object.keys(obj).reduce((acc, key) => {
    const list = obj[key]
    acc = acc.concat(list)
    return acc
}, [])

const result = getValues(data)
console.log(result)
