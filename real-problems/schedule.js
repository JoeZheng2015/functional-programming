const R = require('ramda')

const data = [
    {
        id: 1,
        prices: [
            {
                type: 1,
            },
            {
                type: 1,
            }
        ]
    },
    {
        id: 1,
        prices: [
            {
                type: 1,
            },
            {
                type: 2,
            }
        ]
    }
]

// const processSchedules = (data) => data.map(item => {
//     item.hasDiscount = item.prices.some(price => price.type === 2)
//     return item
// })

const genHasDiscount = R.any(R.compose(R.equals(2), R.prop('type')))
const addHasDiscount = R.converge(R.assoc('hasDiscount'), [R.compose(genHasDiscount, R.prop('prices')), R.identity])
const processSchedules = R.map(addHasDiscount)

const schedules = processSchedules(data)
console.log(schedules.map(schedule => schedule.hasDiscount)) // [false, true]
