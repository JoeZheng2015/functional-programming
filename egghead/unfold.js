// 根据指定 step 和终值，生成数组
const R = require('ramda')

// from(1, 5, 2) => [1, 3, 5]
const from = (begin, end, step) => {
    let result = []
    for (let i = begin; i <= end; i += step) {
        result.push(i)
    }
    return result
}

const throughNbyOne = limit => n => n > limit ? false : [n, n + 1]
const genTo20By = R.unfold(throughNbyOne(20))

const result = from(1, 20, 1)

console.log(result)