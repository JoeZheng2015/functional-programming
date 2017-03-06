// 更新对象
// 优化方式
// 1、使用 propOr 设置默认值
// 2、使用 compose 
// 3、使用 converge 减少 person 参数的出现
// 由：const getUpdatedPerson = (person) => R.assoc('avatar', getWithDefault(person), person)
// 到：const getUpdatedPerson = R.converge(R.assoc('avatar'), [getWithDefault, R.identity])
const R = require('ramda')

const person = {
    name: 'joe',
}

// const genUrl = (id) => `http://${id}.png`
// const getUpdatedPerson = (person) => {
//     const url = genUrl(person.id)
//     return R.assoc('avatar', url, person)
// } 

const genUrl = (id) => `http://${id}.png`
const getWithDefault = R.compose(genUrl, R.propOr('default', 'id'))
const getUpdatedPerson = R.converge(R.assoc('avatar'), [getWithDefault, R.identity])
const result = getUpdatedPerson(person)
console.log(result) // { name: 'joe', id: 1, avatar: 'http://1.png' }
