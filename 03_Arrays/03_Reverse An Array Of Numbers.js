const solve = (n, array = []) => {
  return array.slice(0, n).reverse().join(' ')
}

console.log(solve(3, [10, 20, 30, 40, 50]));
