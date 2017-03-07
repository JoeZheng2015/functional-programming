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

const parseQs = qs => {
    const tail = R.tail(qs)
    const pairs = tail.split('&')
    return pairs.reduce((acc, pair) => {
        const [key, value] = pair.split('=')
        acc[key] = value
        return acc
    }, {})
}

const result = parseQs(queryString)
console.log(result)