const solve = (array =[]) => {
  let arr = array[0].split(' ').map(Number)
  arr
  let number = array[1]
  number
  let pairs = []
  arr.forEach((element, index) => {
    arr.forEach((element2, index) => {
      let sum = element + element2
      sum
      if (sum === number) {
        sum
        pairs.push(`${element} ${element2}`)
      }
    })
  })
  pairs
  pairs.forEach((element, index) => {
    let [num1, num2] = element.split(' ')
    num1
    num2
    pairs.slice(index, )
    pairs
  })
}

// solve(['1 7 6 2 19 23', 8])
console.log(solve(['14 20 60 13 7 19 8', 27]))


// reduce((prevValue, currValue, currIndex, array) => {
//   prevValue
//   currValue
//   if (prevValue[0] === currValue[2]) {
//     console.log(`${prevValue[0]} ${prevValue[2]}`)
//   }
//   return currValue
// }/* initial value */ )