// 从数组中选取满足条件的元素
const R = require('ramda')

const products = [
    {name: 'Jeans', price: 80, category: 'clothes', stock: 100},
    {name: 'Hoodie', price: 50, category: 'clothes', stock: 20},
    {name: 'Sneakers', price: 120, category: 'clothes', stock: 30},
    {name: 'Cards', price: 35, category: 'games', stock: 10},
]

// 非函数式
// const all = (...args) => a => args.every(fn => fn.call(null, a))
// const categoryCond = p => p.category === 'clothes'
// const stockCond = p => p.stock < 50
// const priceCond = p => p.price < 100

// const getResults = xs => xs
//     .filter(all(categoryCond, stockCond, priceCond))
//     .map(p => p.name)

// 函数式
const filterProducts = R.filter(R.where({
    category: R.equals('clothes'),
    stock: R.lt(R.__, 50),
    price: R.lt(R.__, 100),
}))
const getResults = R.pipe(filterProducts, R.pluck('name'))

const result = getResults(products)
console.log(result)
