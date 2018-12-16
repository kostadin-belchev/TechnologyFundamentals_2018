const solve = (inputArray = []) => {
  for (const commandString of inputArray) {
    if (commandString === 'end') {
      return
    }
    commandString
    const artistRegex = /^[A-Z'\ ][a-z'\ ]+$/gm
    const songRegex = /^[A-Z\ ]+$/gm
    const [artistName, songName] = commandString.split(':')

    if (!artistRegex.test(artistName) || !songRegex.test(songName)) {
      console.log('Invalid input!')
      continue
    }

    const key = artistName.length
    const decryptedStringIndexes = []

    for (symbol of commandString) {
      let currCharCode = symbol.charCodeAt(0)
      let correctCharCode = currCharCode
      if (symbol === `'` || symbol === ' ') {
        // what could be interpreted as whitespaces
        decryptedStringIndexes.push(correctCharCode)
      } else {
        if (currCharCode >= 65 && currCharCode <= 90) {
          // capital letter
          if (currCharCode + key > 90) {
            correctCharCode = currCharCode -26 + key
          } else {
            correctCharCode = currCharCode + key
          }
        } else if (currCharCode >= 97 && currCharCode <= 122) {
          // lowercase
          if (currCharCode + key > 122) {
            correctCharCode = currCharCode -26 + key
          } else {
            correctCharCode = currCharCode + key
          }
        }
        decryptedStringIndexes.push(correctCharCode)
      }
    }
    const encryptedMessage = String.fromCharCode(...decryptedStringIndexes).replace(':', '@')
    console.log(`Successful encryption: ${encryptedMessage}`)
  }
}
// solve(['Eminem:VENOM', 'Linkin park:NUMB', 'Drake:NONSTOP', 'Adele:HELLO', 'end'])

solve([
  'Michael Jackson:ANOTHER PART OF ME',
  'Adele:ONE AND ONLY',
  "Guns n'roses:NOVEMBER RAIN",
  'Christina Aguilera: HuRt',
  'end',
])

