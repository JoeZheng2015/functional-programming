const countries = [
    {cc: 'US', name: 'USA'},
    {cc: 'CN', name: 'China'},
]
const getCountry = (cc, list) => list.find(country => country['cc'] === cc)
const result = getCountry('CN', countries)
console.log(result)