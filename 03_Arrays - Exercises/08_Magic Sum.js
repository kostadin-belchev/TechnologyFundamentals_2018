const solve = (arr =[]) => {
  let array = arr[0].split(' ').map(Number)
  let number = Number(arr[1])
  for (let i = 0; i < array.length; i++) {
    const currNumToSum = array[i];
    for (let j = 0; j < array.length; j++) {
      const element = array[j]
      if (currNumToSum + element === number) {
        console.log(`${currNumToSum} ${element}`)
      }
      delete array[i]
      //delete array[j]
    }
  }
}

// solve(['1 7 6 2 19 23', 8])
// solve(['14 20 60 13 7 19 8', 27])
solve(['1 2 3 4 5 6', 6])

const solve2 = (arr =[]) => {
  let array = arr[0].split(' ').map(Number)
  let number = Number(arr[1])
  for (let i = 0; i < array.length; i++) {
    const currNumToSum = array[i];
    let subArray = array.slice(i + 1)

    for (let j = 0; j < subArray.length; j++) {
      const element = subArray[j]
      if (currNumToSum + element === number) {
        console.log(`${currNumToSum} ${element}`)
      }
      // delete array[i]
      //delete array[j]
    }
  }
}


solve2(['1 2 3 4 5 6', 6])
