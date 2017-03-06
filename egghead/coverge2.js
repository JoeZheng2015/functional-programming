const {converge, equals, sort, descend, compose, identity} = require('ramda')

const shouldBeTrue = [6, 1]
const shouldBeFalse = [1, 6]

// 待优化点：
// 1、2 次使用 xs
// const isFirstBiggest = xs => xs[0] === xs.sort((a, b) => b - a)[0]

// 第一步：
// 分离 after fuction（即最后才需要调用的 equals）、和 branch functions（即需要县调用的）
// const isFirstBiggest = converge(equals, [xs => xs[0], xs => xs.sort((a, b) => b - 1)[0]])


// 第二步
// 优化 branch function
const isFirstBiggest = converge(
    equals,
    [
        head,
        compose(head, sort(descend(identity))),
    ]
)

console.log(isFirstBiggest(shouldBeTrue))
console.log(isFirstBiggest(shouldBeFalse))