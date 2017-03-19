// 取数组排序后的第一个元素的名字

const R = require('ramda')

const teams = [
    {name: 'Lions', score: 5},
    {name: 'Tigers', score: 4},
    {name: 'Bears', score: 6},
    {name: 'Monkeys', score: 2},
]

// 非函数式
// const getTopName = (teams) => teams.sort((a, b) => b.score - a.score)[0].name

const getTopName = R.pipe(R.sort(R.descend(R.prop('score'))), R.head, R.prop('name'))

const result = getTopName(teams)
console.log(result)