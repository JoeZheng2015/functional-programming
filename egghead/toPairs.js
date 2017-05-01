// 把对象参数转化为查询字符串

const R = require('ramda')
const qsObj = {
    page: 2,
    size: 10,
    total: 23,
}

// 非函数式，需要自己实现 toPair
// const createQs = qsObj => '?' + Object.keys(qsObj)
//                                     .map(key => [key, qsObj[key]])
//                                     .map(pair => pair.join('='))
//                                     .join('&')
const createQs = R.pipe(
    R.toPairs,
    R.map(R.join('=')),
    R.join('&'),
    R.concat('?')
)
const result = createQs(qsObj)
console.log(result)
