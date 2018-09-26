const halfCutter = (length) => {
  let numOfCutsInHalf = 0
  while (length >= 1) {
    length /= 2
    numOfCutsInHalf++
  }
  numOfCutsInHalf
  return `Length is ${length.toFixed(2)} cm. after ${numOfCutsInHalf} cuts.`
}

console.log(halfCutter(1000))
