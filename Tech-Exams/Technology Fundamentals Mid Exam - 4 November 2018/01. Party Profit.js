const solve = (input = []) => {
  let [ partySize, days ] = input
  let coins = 0
  for (let day = 1; day <= days; day++) {
    // we have to deminish party size at beginning of day
    day
    coins += 50
    // Every 10th (tenth) day at the start of the day, 2 (two) of your companions leave
    if (day % 10 === 0) {
      partySize -= 2
    }
    // every 15th (fifteenth) day 5 (five) new companions are joined at the beginning of the day.
    if (day % 15 === 0) {
      partySize += 5
    }
    const coinsForFood = partySize * 2
    coins -= coinsForFood
    // Every 3rd (third) day, you have a motivational party, spending 3 coins per companion for drinking water. 
    if (day % 3 === 0) {
      const coinsForWater = partySize * 3
      coins -= coinsForWater
    }
    // Every 5th (fifth) day you slay a boss monster and you gain 20 coins per companion.
    // But if you have a motivational party the same day, you spent additional 2 coins per companion. 
    if (day % 5 === 0) {
      const coinsFromMonster = partySize * 20
      coins += coinsFromMonster
      if (day % 3 === 0) {
        const coinsForMotivationalParty = partySize * 2
        coins -= coinsForMotivationalParty
      }
    }
  }
  const coinsPerPerson = Math.floor(coins / partySize)
  return `${partySize} companions received ${coinsPerPerson} coins each.`
}

console.log(solve([3, 5]))
// solve([15, 30])
