const R = require('ramda')
const countries = [
    {cc: 'US', name: 'USA'},
    {cc: 'CN', name: 'China'},
]
const getCountry = R.useWith(R.find, [R.propEq('cc'), R.identity])
const result = getCountry('CN', countries)
console.log(result)
