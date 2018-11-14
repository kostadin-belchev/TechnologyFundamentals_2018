const solve = (array = ['']) => {
  const heading = array.shift()
  const [headingOne, headingTwo, headingThree] = heading.split('|').filter(Boolean)
  const towns = []
  for (const townString of array) {
    const [townName, latitude, longitude] = townString.split('|').filter(Boolean)
    const town = {
      [headingOne.trim()]: townName.trim(),
      [headingTwo.trim()]: +Number(latitude).toFixed(2),
      [headingThree.trim()]: +Number(longitude).toFixed(2),
    }
    towns.push(town)
  }
  return JSON.stringify(towns)
}

console.log(
  solve(['| Town | Latitude | Longitude |', '| Sofia | 42.696552 | 23.32601 |', '| Beijing | 39.913818 | 116.363625 |'])
)
