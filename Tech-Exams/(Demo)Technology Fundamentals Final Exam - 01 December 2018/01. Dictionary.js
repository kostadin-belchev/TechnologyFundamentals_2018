const solve = (array = []) => {
  let [wordsAndDescriptions, controlWords, command] = array
  controlWords = controlWords.split(' | ')
  const dictionary = {}

  wordsAndDescriptions = wordsAndDescriptions.split(' | ')
  for (const wordAndDescription of wordsAndDescriptions) {
    const [word, description] = wordAndDescription.split(': ')
    if (!dictionary.hasOwnProperty(word)) {
      dictionary[word] = []
    }
    dictionary[word].push(description)
  }
  // dictionary

  for (const word of controlWords) {
    for (const key in dictionary) {
      if (dictionary.hasOwnProperty(key) && key === word) {
        const definitions = dictionary[key]
        console.log(`${key}`)
        definitions.sort((a, b) => b.length - a.length)
        for (const definition of definitions) {
          console.log(` -${definition}`)
        }
      }
    }
  }

  if (command === 'List') {
    const words = Object.keys(dictionary).sort((a, b) => a.localeCompare(b)).join(' ')
    console.log(words)
  }
}

solve(['programmer: an animal, which turns coffee into code | developer: a magician', 'Pesho | Gosho', 'List'])

// solve([
//   'tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance',
//   'bit | code | tackle',
//   'End',
// ])
