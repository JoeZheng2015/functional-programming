// 变数组变成对象作为哈希表

const R = require('ramda')

const array = [
    {id: 1, name: 'Jeans'},
    {id: 2, name: 'Iphone'},
]

const arrayToObject = R.converge(R.zipObj,
    [
        R.map(R.prop('id')),
        R.identity
    ]
)
const result = arrayToObject(array)

console.log(result)
