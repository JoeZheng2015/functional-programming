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

const processSchedules = (data) => data.map(item => {
    item.hasDiscount = item.prices.some(price => price.type === 2)
    return item
})
const schedules = processSchedules(data)
console.log(schedules.map(schedule => schedule.hasDiscount))
