const products = [
    {name: 'Jeans', price: 80, category: 'clothes'},
    {name: 'Cards', price: 5, category: 'games'},
    {name: 'iphone', price: 649, category: 'electronics'}
]

// 对应不同类型,应用不用折扣
const applyDiscount = (discount, price) => price * (100 - discount) / 100
const DISCOUNT = {
    'clothes': 50,
    'games': 10,
}
const result = products.map(p => {
    p.price = DISCOUNT[p.category] ? applyDiscount(DISCOUNT[p.category], p.price) : p.price

    return p
})


console.log(result)