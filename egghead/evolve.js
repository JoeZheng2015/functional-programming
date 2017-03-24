// 更改对象的属性

const R = require('ramda')

const product = {
    name: 'cog',
    price: 100,
}

const adjustProduct = R.evolve({
    name: R.toUpper,
})

const result = adjustProduct(product)
console.log(result)