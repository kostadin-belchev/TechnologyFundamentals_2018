const solve = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(`${i} -> ${isSpecial(i) ? 'True' : 'False'}`)
  }
  function isSpecial(num) {
    let sum = 0
    for (const digit of num.toString()) {
      sum += Number(digit)
    }
    if (sum === 5 || sum === 7 || sum === 11) {
      return true
    }
    return false
  }
}

solve(15)