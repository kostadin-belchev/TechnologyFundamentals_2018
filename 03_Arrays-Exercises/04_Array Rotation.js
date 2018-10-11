const solve = (array = [], rotations) => {
  rotations %= array.length
  rotations
  array
  return array.slice(rotations).concat(array.slice(0, rotations)).join(' ')
}

console.log(solve([51, 47, 32, 61, 21], // 32 61 21 51 47
  7
  ))

  console.log(solve([32, 21, 61, 1], // 32 21 61 1
    4
    ))

console.log(solve([2, 4, 15, 31], // 4 15 31 2
  5
  ))