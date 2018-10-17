const solve = (args) => {
  const seqsLength = args.shift() // holds the length of the sequences
  args
  let currSeqLength = 1
  // let start = 0
  let biggestSum = 0
  // let bestStart = 0
  let bestLength = 0
  let bestSequenceIndex = 1
  let bestSequenceSum = 0
  let bestSequences = []


  args.forEach((subSeq, index) => {
    let subSeqOfOnesAndZeros = subSeq.split('!')
    subSeqOfOnesAndZeros
    for (let i = 0; i < subSeqOfOnesAndZeros.length; i++) {
      let currElement = subSeqOfOnesAndZeros[i];
      let prevElement = subSeqOfOnesAndZeros[i - 1]
      if (prevElement === currElement && currElement === '1') {
        currSeqLength++
        currSeqLength
        bestSequenceIndex = index + 1
        bestSequenceIndex
        bestSequences[bestSequenceIndex] = subSeq
        if (currSeqLength > bestLength) {
          bestLength = currSeqLength
          bestLength
          // bestStart = i - bestLength
          // bestStart
        }
      } else {
        currSeqLength = 1
      }
    }
  })
  bestSequences
  let bestSequenceIndex2
  for (let index = 0; index < bestSequences.length; index++) {
    const element = bestSequences[index];
    if (element !== undefined) {
      let currSeq = element.split('!').map(Number)
      currSeq
      let currSum = currSeq.reduce((a, b) => a + b)
      if (currSum > biggestSum) {
        biggestSum = currSum
        bestSequenceIndex2 = index
        bestSequenceIndex2
        biggestSum
      }
    }
  }
  bestSequenceSum = args[bestSequenceIndex - 1].split('!').map(element => Number(element)).reduce((a, b) => a + b)
  bestSequenceSum
  let bestDNAseq = args[bestSequenceIndex - 1].split('!').join(' ')
  return `Best DNA sample ${bestSequenceIndex} with sum: ${bestSequenceSum}.\n${bestDNAseq}
  `
}

// console.log(solve([5, '1!0!1!1!0', '0!1!1!0!0']))
console.log(solve([4, '1!1!0!1', '1!0!0!1', '1!1!0!0']))