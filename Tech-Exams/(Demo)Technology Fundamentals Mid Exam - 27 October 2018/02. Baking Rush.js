const solve = (array = ['']) => {
  const INITIAL_ENERGY = 100
  let energy = INITIAL_ENERGY
  const INITIAL_COINS = 100
  let coins = INITIAL_COINS

  let eventStrings = array[0].split('|')
  for (const eventString of eventStrings) {
    let [ eventNameOrItem, number ] = eventString.split('-')
    number = Number(number)
    switch (eventNameOrItem) {
      case 'rest':
        const currentEnergy = energy
        energy += number
        if (energy > 100) {
          energy = 100
        }
        const delta = energy - currentEnergy
        console.log(`You gained ${delta} energy.`)
        console.log(`Current energy: ${energy}.`)
        break;
      case 'order':
        if (energy - 30 >= 0) { // you complete the order
          energy -= 30
          coins += number
          console.log(`You earned ${number} coins.`)
        } else {
          energy += 50
          console.log('You had to rest!')
        }
        break
      default:
        if (coins - number > 0) {
          coins -= number
          console.log(`You bought ${eventNameOrItem}.`)
        } else { // bankrupt
          console.log(`Closed! Cannot afford ${eventNameOrItem}.`)
          return
        }
        break;
      }
    }
    console.log(`Day completed!\nCoins: ${coins}\nEnergy: ${energy}`)
}

// solve(['rest-2|order-10|eggs-100|rest-10'])
solve(['order-10|order-10|order-10|flour-100|order-100|oven-100|order-1000'])