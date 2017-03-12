// 从数组中选取满足条件的元素

const products = [
    {name: 'Jeans', price: 80, category: 'clothes', stock: 100},
    {name: 'Hoodie', price: 50, category: 'clothes', stock: 20},
    {name: 'Sneakers', price: 120, category: 'clothes', stock: 30},
    {name: 'Cards', price: 35, category: 'games', stock: 10},
]

const all = (...args) => a => args.every(fn => fn.call(null, a))
const categoryCond = p => p.category === 'clothes'
const stockCond = p => p.stock < 50
const priceCond = p => p.price < 100

const getResults = xs => xs
    .filter(all(categoryCond, stockCond, priceCond))
    .map(p => p.name)


const result = getResults(products)
console.log(result)
