const solve = (givenChar = '') => {
  if (givenChar === givenChar.toUpperCase()) {
    return 'upper-case'
  }
  if (givenChar === givenChar.toLowerCase()) {
    return 'lower-case'
  }
}