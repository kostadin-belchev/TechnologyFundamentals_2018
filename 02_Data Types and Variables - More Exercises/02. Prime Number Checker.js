const solve = (num) => {
  return (num % num === 0 && num % 1 === 0) ? true : false
}

console.log(solve(7))