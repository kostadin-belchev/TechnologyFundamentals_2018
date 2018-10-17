const solve = (array = []) => {
  let currentBiggestNum = Number.MIN_SAFE_INTEGER
  return array.filter((value, index, arr) => {
    if (value > currentBiggestNum) {
      currentBiggestNum = value
      return currentBiggestNum
    }
  }).join(' ')
}

console.log(solve([ 1, 3, 8, 4, 10, 12, 3, 2, 24]))
console.log(solve([ 1, 2, 3, 4]))
console.log(solve([ 20, 3, 2, 15, 6, 1]))