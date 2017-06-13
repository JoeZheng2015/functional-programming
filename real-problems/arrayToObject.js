// 变数组变成对象作为哈希表
// [{k: v}] → {k: {k: v}}
const R = require('ramda')

const array = [
    {id: 1, name: 'Jeans'},
    {id: 2, name: 'Iphone'},
]
const arrayToObject = prop => list => {
    return list.reduce((acc, item) => {
        const key = item[prop]
        acc[key] = item
        return acc
    }, {})
}

const result = arrayToObject('id')(array)

// { '1': { id: 1, name: 'Jeans' },
//   '2': { id: 2, name: 'Iphone' } }
console.log(result)
