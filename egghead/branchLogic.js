const R = require('ramda')

const products = [
    {name: 'Jeans', price: 80, category: 'clothes'},
    {name: 'Cards', price: 5, category: 'games'},
    {name: 'iphone', price: 649, category: 'electronics'}
]

// 对应不同类型,应用不用折扣
// const applyDiscount = (discount, price) => price * (100 - discount) / 100

// 非函数式
const DISCOUNT = {
    'clothes': 50,
    'games': 10,
}
// const result = products.map(p => {
//     const discount = DISCOUNT[p.category]
//     p.price = discount ? applyDiscount(discount, p.price) : p.price

//     return p
// })

// 函数式

// 少分支场景
// ifElse
// const result = R.map(
//     R.ifElse(R.propEq('category', 'clothes'), R.over(pLens, applyDiscount(50)), R.identity),
//     products
// )

// when
// const result = R.map(
//     R.when(R.propEq('category', 'clothes'), R.over(pLens, applyDiscount(50))),
//     products
// )

// 多分支场景
const applyDiscount = (discount) => price => price * (100 - discount) / 100
const pLens = R.lensProp('price')
const result = R.map(
    R.cond([
        [R.propEq('category', 'clothes'), R.over(pLens, applyDiscount(50))],
        [R.propEq('category', 'games'), R.over(pLens, applyDiscount(10))],
        [R.T, R.identity]
    ]),
    products
)

console.log(result)