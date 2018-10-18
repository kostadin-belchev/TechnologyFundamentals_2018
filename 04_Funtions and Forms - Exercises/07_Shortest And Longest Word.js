const solve = (sentance = '') => {
  let words = sentance.split(/\W/).filter(e => e !== '')
  // words.sort((firstElement, secondElement) => secondElement.length - firstElement.length)
  let shortestWord = words.reduce((shortest, currWord, currIndex, array) => {
    if (currWord.length < shortest.length) {
      return currWord
    }
    return shortest
  })
  let longestWord = words.reduce((longest, currWord, currIndex, array) => {
    if (currWord.length > longest.length) {
      return currWord
    }
    return longest
  }, '')

  // for (const word of words) {
  //   if (word.length > longestWord.length) {
  //     longestWord = word
  //   } else if (word.length < shortestWord.length) {
  //     shortestWord = word
  //   }
  // }
  return `Longest -> ${longestWord}
  Shortest -> ${shortestWord}
  `
}

console.log(solve('Hello people, are you familiar with the terms of application at the software university?'))

// console.log(solve('Lorem Ipsum is simply dummy text of the printing and typesetting industry.'))

// console.log(solve('short eqsho pe ep'))

// console.log(solve('ONEWORDONLY'))