// 取出数组的指定类型的元素
const R = require('ramda')

const pets = [
    {name: 'a', type: 'dog'},
    {name: 'b', type: 'cat'},
    {name: 'c', type: 'dog'},
    {name: 'd', type: 'cat'},
    {name: 'a', type: 'dog'},
]

const dogCheck = pet => pet.type === 'dog'
const catCheck = pet => pet.type === 'cat'
const partition = (predicate, xs) => [xs.filter(predicate), xs.filter(x => !predicate(x))]


const result = partition(dogCheck, pets)

console.log(result)

