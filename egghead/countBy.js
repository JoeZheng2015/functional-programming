const R = require('ramda')

const text = 'hello world and HELLO WORLD a b'

const countWords = R.compose(
    R.map(R.sortBy(R.identity)),
    R.invert,
    R.countBy(R.toLower),
    R.match(/\w+/g)
)
const result = countWords(text)

console.log(result)