const solve = (array = []) => {
  let arr = array[0].split(' ').map(Number)
  arr
  let currSeqLength = 1
  let startIndex = 0
  let bestStart = 0
  let bestLength = 1

  for (let i = 1; i < arr.length; i++) {
    const element = arr[i];
    element
    if (arr[i] === arr[i - 1]) {
      currSeqLength++
      startIndex = arr[i]
      startIndex
    } else {
      currSeqLength = 1
      startIndex = arr[i]
      startIndex
    }

    if (currSeqLength > bestLength) {
      bestLength = currSeqLength
      bestLength
      bestStart = startIndex
      bestStart
    }
  }

  let result = []
  for (let i = 0; i < bestLength; i++) {
    result.push(bestStart)
  }
  return result.join(' ')
}

console.log(solve(['2 1 1 2 3 3 2 2 2 1']))
// console.log(solve(['1 1 1 2 3 1 3 3']))
// console.log(solve(['4 4 4 4']))
// console.log(solve(['0 1 1 5 2 2 6 3 3']))