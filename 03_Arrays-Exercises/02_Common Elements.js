const solve = (firstArray = [], secondArray = []) => {
  firstArray.forEach((elementFromFirst) => {
    secondArray.forEach((elementFromSecond) => {
      if (elementFromFirst === elementFromSecond) {
        console.log(elementFromFirst)
      }
    })
  })
}

solve(["Hey", "hello", 2, 4, "Pesho", "e"], ["Pecho", 10, "hey", 4, "hello", "2"])