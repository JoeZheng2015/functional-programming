const R = require('ramda')

const getName = R.tryCatch(R.prop('name'), R.always('Default'))
const result = getName(undefined)

console.log(result)