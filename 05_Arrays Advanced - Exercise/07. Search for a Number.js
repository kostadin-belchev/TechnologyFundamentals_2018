const solve = (array = [], arrayTwo = []) => {
  const [numberOfElementsToTake, numberOfElementsToDelete, numberToSearchFor] = arrayTwo
  array = array.slice(0, numberOfElementsToTake)
  array.splice(0, numberOfElementsToDelete)
  let counter = 0
  for (const num of array) {
    if (num === numberToSearchFor) {
      counter++
    }
  }
  return `Number ${numberToSearchFor} occurs ${counter} time.`
}

console.log(solve([5, 2, 3, 4, 1, 6], [5, 2, 3]))
