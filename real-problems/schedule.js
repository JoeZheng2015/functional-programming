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
const genHasDiscount = R.some(price => R.equals(price.type, 2))
const processSchedules = data => data.map(item => {
    item.hasDiscount = genHasDiscount(item.prices)
    return item
})
const schedules = processSchedules(data)
console.log(schedules.map(schedule => schedule.hasDiscount)) // [false, true]
