const R = require('ramda')

const getName = R.prop('name')
const result = getName(undefined)

console.log(result)