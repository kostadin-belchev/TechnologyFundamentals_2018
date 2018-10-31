const solve = (array = ['']) => {
  let list = []

  for (const element of array) {
    if (element.endsWith('is going!')) {
      // check if in list
      const name = element.split(' ')[0]
      if (list.includes(name)) {
        console.log(`${name} is already in the list!`)
      } else {
        list.push(name)
      }
    } else { // if not going
      // check if in list
      const name = element.split(' ')[0]
      if (!list.includes(name)) {
        console.log(`${name} is not in the list!`)
      } else {
        // removed them from the list
        let index = list.indexOf(name)
        list.splice(index, 1)
      }
    }
  }
  return list.join('\n')
}

// console.log(solve(['Allie is going!',
// 'George is going!',
// 'John is not going!',
// 'George is not going!']
// ))

console.log(solve(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])
)