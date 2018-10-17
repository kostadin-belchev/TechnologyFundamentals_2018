const solve = (array = ['']) => {
  let step = Number(array.pop())
  let result = []
  for (let i = 0; i < array.length; i += step) {
    const element = array[i];
    result.push(element)
  }
  return result.join(' ')
}

console.log(solve(['5', '20', '31', '4', '20', '2']))