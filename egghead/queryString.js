const R = require('ramda')

const queryString = '?page=2&pageSize=10&total=203'

// const parseQs = qs => {
//     const tail = qs.slice(1)
//     const pairs = tail.split('&')
//     return pairs.reduce((acc, pair) => {
//         const [key, value] = pair.split('=')
//         acc[key] = value
//         return acc
//     }, {})
// }

// 自己写的
// const parseQs = R.compose(
//     R.reduce((acc, pair) => {
//         const [key, value] = pair.split('=')
//         acc[key] = value
//         return acc
//     }, {}),
//     R.split('&'),
//     R.tail
// )

// egghead写的
// 总结：我之所以写不出，是不了解有 fromPairs 函数
const parseQs = R.compose(
    R.fromPairs,
    R.map(R.split('=')),
    R.split('&'),
    R.tail
)

const result = parseQs(queryString)
console.log(result)