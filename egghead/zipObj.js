const R = require('ramda')

const data = [
    'joe',
    [
        'basketball',
        'football',
    ]
]

const toObj = R.zipObj(['name', 'hobbies'])
const result = toObj(data)
console.log(result)
