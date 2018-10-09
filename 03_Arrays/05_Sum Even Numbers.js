const solve = (array = ['']) => {
  return array.map(Number).filter((num) => num % 2 === 0).reduce((a, b) => a + b, 0)
}

console.log(solve(['1','2','3','4','5','6']))
console.log(solve(['3','5','7','9']))
console.log(solve(['2','4','6','8','10']))