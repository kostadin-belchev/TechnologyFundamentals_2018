const solve = (inputArray = []) => {
  const [encryptedString, controlSubstrings] = inputArray
  const [ firstControlSubstring, secondControlSubstring ] = controlSubstrings.split(' ')
  const decryptedStringIndexes = []
  const validator = /^[d-z{}|#]+$/gm

  if (!validator.test(encryptedString)) {
    return 'This is not the book you are looking for.'
  }

  for (symbol of encryptedString) {
    const currCharCode = symbol.charCodeAt(0)
    decryptedStringIndexes.push(currCharCode - 3)
  }

  const decryptedString = String.fromCharCode(...decryptedStringIndexes)
  const message = decryptedString.replace(new RegExp(`${firstControlSubstring}`, 'g'), secondControlSubstring)
  return message
}

console.log(solve(['wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw', 'ec an']))

console.log(solve(['arx#vkdww#qrw#sdvv', 't l']))
