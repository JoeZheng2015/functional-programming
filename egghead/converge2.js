const shouldBeTrue = [6, 1]
const shouldBeFalse = [1, 6]

const isFirstBiggest = xs => xs[0] === xs.sort((a, b) => b - a)[0]

console.log(isFirstBiggest(shouldBeTrue))
console.log(isFirstBiggest(shouldBeFalse))