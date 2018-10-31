const solve = (array = []) => {
  return [...new Set([...array])].join(' ')
}

console.log(solve([7, 8, 9, 7, 2, 3, 4, 1, 2]))