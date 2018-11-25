const solve = (array = ['']) => {
  const herosArray = []
  for (const string of array) {
    const [heroName, heroLevel, itemsString] = string.split(' / ')
    const items = itemsString.split(', ')
    const hero = { name: heroName, level: Number(heroLevel), items }
    herosArray.push(hero)
  }
  return JSON.stringify(herosArray)
}

console.log(
  solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
  ])
)
