// 根据指定 step 和终值，生成数组
const R = require('ramda')

const throughNbyOne = limit => n => n > limit ? false : [n, n + 1]
const genTo20 = R.unfold(throughNbyOne(20))
const result = genTo20(1)

console.log(result)