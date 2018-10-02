const solve = (num) => {
  let sum = 0
  for (const digit of num.toString()) {
      sum += Number(digit)
  }
  return sum
}

solve(245678)