const calculator = (number, operator, secondNumber) => {
  switch (operator) {
    case '+':
      return (number + secondNumber).toFixed(2)
      break;
    case '-':
      return (number - secondNumber).toFixed(2)
      break;
    case '*':
      return (number * secondNumber).toFixed(2)
      break;
    case '/':
      return (number / secondNumber).toFixed(2)
      break;
    default:
      break;
  }
}

console.log(calculator(5, '+', 10))