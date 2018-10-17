const solve = (array = []) => {
  let isThereSum = false
  let indexOfSum
  array.forEach((element, index) => {
    let leftSum = array.slice(0, index).reduce((prevValue, currValue) => prevValue + currValue, 0)
    leftSum
    let rightSum = array.slice(index + 1).reduce((prevValue, currValue) => prevValue + currValue, 0)
    rightSum
    if (leftSum === rightSum) {
      isThereSum = true
      indexOfSum = index
    }
  })

  if (isThereSum) {
    return indexOfSum
  }
  return 'no'
}

console.log(solve([1, 2, 3, 3]))
console.log(solve([1, 2]))
console.log(solve([1]))
console.log(solve([1, 2, 3]))
console.log(solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]))