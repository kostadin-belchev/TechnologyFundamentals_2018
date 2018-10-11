const solve = (numsArray = [Number]) => {
  let newArray = []
  numsArray.map((num, index) => {
    if (num % 2 === 0) {
      newArray.push(num + numsArray.indexOf(num))
    } else {
      newArray.push(num - numsArray.indexOf(num))
    }
  })
  console.log(newArray)
  console.log(numsArray.reduce((a, b) => a + b, 0))
  console.log(newArray.reduce((a, b) => a + b, 0))
}

solve([5, 15, 23, 56, 35])
// solve([])
