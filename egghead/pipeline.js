const teams = [
    {name: 'Lions', score: 5},
    {name: 'Tigers', score: 4},
    {name: 'Bears', score: 6},
    {name: 'Monkeys', score: 2},
]

// 非函数式
const getTopName = (teams) => teams.sort((a, b) => b.score - a.score)[0].name

const result = getTopName(teams)
console.log(result)