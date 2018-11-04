const solve = (input = ['']) => {
  const INITIAL_HEALT = 100
  const INITIAL_COINS = 0

  let health = INITIAL_HEALT
  let coins = INITIAL_COINS

  const rooms = input[0].split('|')
  for (const room of rooms) {
    let [ itemOrMonster, number ] = room.split(' ')
    number = Number(number)
    switch (itemOrMonster) {
      case 'potion':
        const currentHealth = health
        health += number
        if (health > 100) {
          health = 100
        }
        let delta = health - currentHealth
        console.log(`You healed for ${delta} hp.`)
        console.log(`Current health: ${health} hp.`)
        break;
      case 'chest':
        coins += number
        console.log(`You found ${number} coins.`)
        break;
      default:
        health -= number
        if (health <= 0) { // if you died
          console.log(`You died! Killed by ${itemOrMonster}.`)
          console.log(`Best room: ${rooms.indexOf(room) + 1}`)
          return
        }
        console.log(`You slayed ${itemOrMonster}.`)
        break;
    }
  }
  console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`)
}

// solve(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000'])
solve(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])