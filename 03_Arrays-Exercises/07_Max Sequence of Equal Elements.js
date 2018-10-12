const solve = (arr = []) => {
  let array = arr[0].split(' ').map(Number)
  let currSeqLength = 1
  // let start = 0
  let bestStart = 0
  let bestLength = 0

  for (let i = 1; i < array.length; i++) {
    let currElement = array[i]
    let prevElement = array[i - 1]
    if (currElement === prevElement) {
      currSeqLength++
      if (currSeqLength > bestLength) {
        bestLength = currSeqLength
        bestStart = i - bestLength + 1
      }
    } else {
      currSeqLength = 1
    }
  }
  return array.slice(bestStart, bestStart + bestLength).join(' ')
}

console.log(solve(['2 1 1 2 3 3 2 2 2 1']))
console.log(solve(['1 1 1 2 3 1 3 3']))
console.log(solve(['4 4 4 4']))
console.log(solve(['0 1 1 5 2 2 6 3 3']))