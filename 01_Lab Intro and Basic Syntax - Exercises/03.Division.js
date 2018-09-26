// return whether that number is divisible by the following numbers: 2, 3, 6, 7, and 10
const solve = (num) => {
  if (num % 10 === 0) {
    return `The number is divisible by 10`
  } else if (num % 7 === 0) {
    return `The number is divisible by 7`
  } else if (num % 6 === 0) {
    return `The number is divisible by 6`
  } else if (num % 3 === 0) {
    return `The number is divisible by 3`
  } else if (num % 2 === 0) {
    return `The number is divisible by 2`
  } else {
    return 'Not divisible'
  }
}

console.log(solve(1643));
