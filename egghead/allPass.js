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
const result = cars.filter(car => {
    const goodMilage = car => car.mpg >= 30
    const fourDoors = car => car.doors === 4

    return goodMilage(car) && fourDoors(car)
})
console.log(result)
