const solve = (arrayOfCommands = ['']) => {
  let counter = 0
  let array = []
  for (const command of arrayOfCommands) {
    counter++
    if (command === 'add') {
      array.push(counter)
    } else { // remove
      array.pop()
    }
  }
  return (array.length > 0) ? array.join(' ') : 'Empty'
}

console.log(solve(['add', 'add', 'add', 'add']))
console.log(solve(['add', 'add', 'remove', 'add', 'add']))
console.log(solve(['remove', 'remove', 'remove']))
