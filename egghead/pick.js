const product = {
    name: 'iphone',
    price: 100,
    stock: 1,
}

const getProps = props => target => props.reduce((acc, prop) => {
    if (target.hasOwnProperty(prop)) {
        acc[prop] = target[prop]
    }
    return acc
}, {})

const result = getProps(['name', 'price', 'haha'])(product)
console.log(result)