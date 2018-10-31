const solve = (array = []) => {
  array.sort((a, b) => b - a)
  const result = array.reduce((acc, nextValue, index) => {
    if (index % 2 === 0) {
      acc.push(array[index / 2])
    } else {
      acc.push(array[array.length - (index + 1) / 2])
    }
    return acc
  }, [])
  return result.join(' ')
  // console.log( result.join(' '))
  // for (let i = 0; i < array.length; i++) {
  //   const element = array.pop()
  //   element
  //   array.splice(++i, 0, element)
  // }
}
// solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
console.log(solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]))



















  //const result = array.reduce((acc, nextValue, index) => {
  //   if (index % 2 === 0) {
  //     acc.push(array[index/2])
  //   } else {
  //     acc.push(array[array.length - (index + 1)/2])
  //   }
  //   return acc
  // }, [])