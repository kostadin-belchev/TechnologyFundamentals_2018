const solve = (array = []) => {
  let rotations = array.pop()
  rotations %= array.length
  array.unshift(...array.splice(array.length - rotations, rotations))
  return array.join(' ')
}

console.log(solve(['1', '2', '3', '4', '2']))