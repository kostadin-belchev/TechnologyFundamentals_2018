const solve = (array = ['']) => {
  let result = []
  array = array.map(Number)
  for (let i = 0; i < array.length; i++) {
    let S = array[i]
    if (S >= 0 && S < 10) {
      let subArray = array.slice(i + 1, i + S + 1)
      subArray
      result.push(subArray.reduce((a, b) => a * b, 1))
    }
  }
  return result.sort((a, b) => a - b).pop()
}

// console.log(solve(['10',
// '20',
// '2',
// '30',
// '44',
// '3',
// '56',
// '20',
// '24']
// ));

console.log(solve([
'100',
'200',
'2',
'3',
'2',
'3',
'2',
'1',
'1',
]))