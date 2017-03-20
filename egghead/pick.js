const product = {
    name: 'iphone',
    price: 100,
    stock: 1,
}

const getProps = props => target => {
    let result = {}
    for (let i = 0; i < props.length; i++) {
        const prop = props[i]

        if (target.hasOwnProperty(prop)) {
            result[prop] = target[prop]
        }
    }
    return result
}

const result = getProps(['name', 'price'])(product)
console.log(result)