const solve = (input = ['']) => {
  const countriesToTowns = new Map()
  for (const inputString of input) {
    let [country, town, offer] = inputString.split(' > ')
    offer = Number(offer)
    if (!countriesToTowns.has(country)) {
      countriesToTowns.set(country, new Map())
    }
    const currCountry = countriesToTowns.get(country)
    if (!currCountry.has(town)) {
      currCountry.set(town, offer)
    } else {
      const lowestOffer = Math.min(offer, currCountry.get(town))
      currCountry.set(town, lowestOffer)
    }
  }
  const result = [...countriesToTowns].sort((a, b) => {
    const countryAName = a[0]
    const countryBName = b[0]
    if (countryAName !== countryBName) {
      return countryAName.localeCompare(countryBName)
    }
  })

  let resultingString = ''
  for (const countryAndTowns of result) {
    const countryName = countryAndTowns[0]
    resultingString += `${countryName} -> `
    for (const keyValuePair of [...countryAndTowns[1]]) {
      resultingString += `${keyValuePair[0]} -> ${keyValuePair[1]} `
    }
    resultingString += '\n'
  }
  console.log(resultingString)
}

solve([
  'Bulgaria > Sofia > 500',
  'Bulgaria > Sopot > 800',
  'France > Paris > 2000',
  'Albania > Tirana > 1000',
  'Bulgaria > Sofia > 200',
])
