const solve = (arrayOne = [''], arrayTwo = ['']) => {
  arrayOne = arrayOne.map(Number)
  arrayTwo = arrayTwo.map(Number)
  // let areEqual = false
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return `Arrays are not identical. Found difference at ${i} index`
    }
  }
  return `Arrays are identical. Sum: ${arrayTwo.reduce((a, b) => a + b, 0)}`
}

console.log(solve(['10','20','30'], ['10','20','30']))
console.log(solve(['1','2','3','4','5'], ['1','2','4','4','5']))
console.log(solve(['1'], ['10']))
