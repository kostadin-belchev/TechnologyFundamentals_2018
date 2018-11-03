const solve = (array = []) => {
  for (const number of array) {
    console.log(isPalindrome(number))
  }

  function isPalindrome (num) {
    let numAsString = num.toString()
    let len = Math.floor(numAsString.length / 2);
    for (let i = 0; i < len; i++) {
      if (numAsString[i] !== numAsString[numAsString.length - i - 1]) {
        return false;
      }
    }
    return true;
  }
}

solve([123,323,421,121])