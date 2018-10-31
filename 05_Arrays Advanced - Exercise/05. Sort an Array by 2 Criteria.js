const solve = (array = ['']) => {
  return array.sort((a, b) => {
    if (b.length !== a.length) {
    return a.length - b.length
    } else {
      return a.localeCompare(b)
    }
  }).join('\n')
}

console.log(solve(["alpha", "beta", "gamma"]))