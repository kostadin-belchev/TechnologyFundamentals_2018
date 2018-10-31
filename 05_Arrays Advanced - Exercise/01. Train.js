const solve = (arr = ['']) => {
  let listOfWagons = arr.shift().split(' ').map(Number)
  let maxWagonCapacity = arr.shift()

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    if (element.startsWith('Add')) { // Add command
      const value = element.split(' ')[1]
      listOfWagons.push(Number(value))
    } else {
      let numToAdd = Number(element)
      for (let j = 0; j < listOfWagons.length; j++) {
        if (listOfWagons[j] + numToAdd <= maxWagonCapacity) {
          listOfWagons[j] = listOfWagons[j] + numToAdd
          break
        }
      }
      
    }
  }
  return listOfWagons.join(' ')
}

solve(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)