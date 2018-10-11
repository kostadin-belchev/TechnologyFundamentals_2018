const solve = (firstArray = [], secondArray = []) => {
  let newArray = []
  firstArray.forEach((elementFromFirst, index) => {
    if (index % 2 === 0) {
      newArray.push(Number(elementFromFirst) + Number(secondArray[index]))
    } else {
      newArray.push(elementFromFirst + secondArray[index])
    }
  })
  return newArray.join(' - ')
}

console.log(solve(["5", "15", "23", "56", "35"],
["17", "22", "87", "36", "11"]
))