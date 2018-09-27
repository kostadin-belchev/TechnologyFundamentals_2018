const halfCutter = (length) => {
  let numOfCutsInHalf = 0
  do {
    length /= 2
    numOfCutsInHalf++
  } while (length >= 1)
  numOfCutsInHalf
  return `Length is ${length.toFixed(2)} cm. after ${numOfCutsInHalf} cuts.`
}

console.log(halfCutter(1000))
console.log(halfCutter(1))
