const factorialDivision = (numOne, numTwo) => {
  const factorial = (num) => (num === 0 || num === 1) ? 1 : num * factorial(num - 1)
  let factorialOfFirstNum = factorial(numOne)
  factorialOfFirstNum
  let factorialOfSecondNum = factorial(numTwo)
  factorialOfSecondNum
  return (factorialOfFirstNum / factorialOfSecondNum).toFixed(2)
}

console.log(factorialDivision(5, 2))
console.log(factorialDivision(6, 2))
