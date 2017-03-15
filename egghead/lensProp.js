// 查值、赋值、函数赋值
const R = require('ramda')

const person = {
    firstName: 'Fred',
    lastName: 'Flintstone',
}

const view = (prop, target) => target[prop]
const set = (prop, value, target) => Object.assign({}, target, {[prop]: value})
const over = (prop, action, target) => Object.assign({}, target, {[prop]: action(prop)})

const fLens = R.lensProp('firstName')
const result = R.over(fLens, R.toUpper, person)

console.log(result)