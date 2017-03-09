const R = require('ramda')

const products = [
    {name: 'Jeans', price: 1, category: 'c'},
    {name: 'Hoodie', price: 2, category: 'c'},
    {name: 'Cards', price: 3, category: 'c'},
    {name: 'iPhone', price: 4, category: 'c'},
    {name: 'Pan', price: 4, category: 'c'},
]

// 一般方法
// const result = products.map(p => ({name: p.name, price: p.price}))

const getNameAndPrice = R.project(['name', 'price'])
const result = getNameAndPrice(products)

console.log(result)