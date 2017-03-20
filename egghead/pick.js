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

const pickBy = predicate => target => Object.keys(target).reduce((acc, prop) => {
    const value = target[prop]

    if (predicate(value, prop)) {
        acc[prop] = value
    }
    return acc
}, {})

const getProps = pickBy(value => Number(value))

const result = getProps(product)
console.log(result)