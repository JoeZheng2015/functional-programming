// 根据多个条件排序

const R = require('ramda')
const sample = [
    {age: 40, height: 168},
    {age: 40, height: 200},
    {age: 20, height: 172}
]

// 使用 R.sortWith 来根据 age 和 height 排序
const sortWithAgeAndHeight = R.sortWith([
    R.ascend(R.prop('age')),
    R.descend(R.prop('height'))
])
const result = sortWithAgeAndHeight(sample)
console.log(result)
