const solve = (firstChar = '', secondChar = '') => {
  let result = []
  let firstCharCharCode = firstChar.charCodeAt()
  // firstCharCharCode
  let secondCharCharCode = secondChar.charCodeAt()
  // secondCharCharCode
  let startingPoint = Math.min(firstCharCharCode, secondCharCharCode)
  let endingPoint = Math.max(firstCharCharCode, secondCharCharCode)
  for (let i = startingPoint + 1; i < endingPoint; i++) {
    let currChar = String.fromCharCode(i)
    // currChar
    result.push(currChar)
  }
  return result.join(' ')
}

// console.log(solve('a','d'))

//console.log(solve('#',':'))
console.log(solve('C','#'))