const products = [
    {name: 'Jeans', price: 80, category: 'clothes'},
    {name: 'Cards', price: 5, category: 'games'},
    {name: 'iphone', price: 649, category: 'electronics'}
]

// 对应不同类型,应用不用折扣
const applyDiscount = (discount, price) => price * (100 - discount) / 100
const result = products.map(p => {
    if (p.category === 'clothes') {
        p.price = applyDiscount(50, p.price)
    }
    else if (p.category === 'games') {
        p.price = applyDiscount(10, p.price)
    }

    return p
})
console.log(result)