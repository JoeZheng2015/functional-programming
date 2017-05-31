// 获取嵌套的数组元素
const R = require('ramda')
const product = {
    name: 'Data',
    sizes: [
        {
            name: 'L',
            colors: [
                { name: 'red' },
                { name: 'blue' },
            ],
        },
        {
            name: 'M',
            colors: [
                {name: 'green'},
                {name: 'yellow'},
            ]
        },
        {
            name: 'S',
            colors: [
                {name: 'purple'},
                {name: 'blue'},
            ]
        }
    ]
}

// const getUniqueColors = R.pipe(
//     R.prop('sizes'),
//     R.map(R.prop('colors')),
//     R.unnest,
//     R.pluck('name'),
//     R.uniq
// )
const getUniqueColors = product => [
    ...product.sizes.reduce((colors, size) => {
        size.colors.forEach(color => colors.add(color.name))
        return colors
    }, new Set())
]
const result = getUniqueColors(product)
console.log(result)
