// 多条件筛选

const R = require('ramda')
const cars = [
    {
        name: 'suv',
        doors: 4,
        mpg: 19,
    },
    {
        name: 'a',
        doors: 4,
        mpg: 30,
    },
    {
        name: 'b',
        doors: 4,
        mpg: 37,
    },
    {
        name: 'c',
        doors: 2,
        mpg: 32, 
    }
]

// 非函数式编程
// const result = cars.filter(car => {
//     const goodMilage = car => car.mpg >= 30
//     const fourDoors = car => car.doors === 4
//     const predicates = [
//         goodMilage,
//         fourDoors,
//     ]

//     return predicates.every(predicate => predicate(car))
// })

// 函数式编程
const goodMilage = R.propSatisfies(R.lte(30), 'mpg')
const fourDoors = R.propEq('doors', 4)
const predicates = R.allPass([goodMilage, fourDoors])
const result = R.filter(predicates, cars)

console.log(result)
