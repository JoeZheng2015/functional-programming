const product = {
    name: 'iphone',
    price: 100,
    stock: 1,
}

const pick = props => target => props.reduce((acc, prop) => {
    if (target.hasOwnProperty(prop)) {
        acc[prop] = target[prop]
    }
    return acc
}, {})

const pickAll = props => target => props.reduce((acc, prop) => {
    acc[prop] = target[prop]
    return acc
}, {})

const getProps = pickAll(['name', 'price', 'haha'])

const result = getProps(product)
console.log(result)