const products = [
    {name: 'Jeans', price: 1, category: 'c'},
    {name: 'Hoodie', price: 2, category: 'c'},
    {name: 'Cards', price: 3, category: 'c'},
    {name: 'iPhone', price: 4, category: 'c'},
    {name: 'Pan', price: 4, category: 'c'},
]

const result = products.map(p => ({name: p.name, price: p.price}))

console.log(result)