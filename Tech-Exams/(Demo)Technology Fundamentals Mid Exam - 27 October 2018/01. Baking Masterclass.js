const solve = input => {
  const [budget, students, flourPrice, eggPrice, apronPrice] = input
  const apronsCount = Math.ceil(students * 1.2)
  const apronsCost = apronPrice * apronsCount

  let flourCount = students

  let free = Math.floor(students / 5)
  flourCount -= free

  const flourCost = flourPrice * flourCount
  const eggsCost = 10 * eggPrice * students
  const totalCost = apronsCost + flourCost + eggsCost
  let outcome = budget - totalCost
  if (outcome >= 0) {
    // budget is enough
    return `Items purchased for ${totalCost.toFixed(2)}$.`
  }
  return `${Math.abs(outcome).toFixed(2)}$ more needed.`
}

console.log(solve([50, 2, 1.0, 0.1, 10.0]))
console.log(solve([100, 25, 4.0, 1.0, 6.0]))
