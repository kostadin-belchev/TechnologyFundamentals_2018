const solve = (num) => {
  let numAsString = num.toString()
  let oddSum = 0
  let evenSum = 0
  for (const char of numAsString) {
    let digit = Number(char)
    digit
    if (digit % 2 === 0) { // even
      evenSum += digit
    } else {
      oddSum += digit
    }
  }
  return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
}

console.log(solve(1000435))