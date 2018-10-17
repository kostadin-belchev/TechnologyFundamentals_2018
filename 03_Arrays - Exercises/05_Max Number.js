const solve = (numbers = []) => {
  let topIntegers = []
  let currTopInteger
  numbers.forEach((num, index) => {
    currTopInteger = Math.max(...numbers.slice(index))
    topIntegers.push(currTopInteger)
  })
  return topIntegers.filter((value, index, array) => array.indexOf(value) === index).join(' ')
}

console.log(solve([1, 4, 3, 2]))
// console.log(solve([14, 24, 3, 19, 15, 17]))
// console.log(solve([41, 41, 34, 20]))
// console.log(solve([27, 19, 42, 2, 13, 45, 48]))