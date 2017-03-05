const R = require('ramda')

function upperCaser(input) {
    return R.toUpper(input)
}

module.exports = upperCaser