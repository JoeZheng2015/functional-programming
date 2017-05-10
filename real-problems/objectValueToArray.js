// 提取对象的 value
const R = require('ramda')
const data = {
    A: [1, 2],
    B: [3, 4],
}

const getValues = R.pipe(R.values, R.flatten)
const result = getValues(data)
console.log(result)
