const solve = (numOne, numTwo, numThree) => {
  const sum = (numOne, numTwo) => {
    return numOne + numTwo
  }
  const subtract = (sum, numThree) => {
    return sum - numThree
  }
  return subtract(sum(numOne, numTwo), numThree)
}

console.log(solve(23,
  6,
  10
  ))