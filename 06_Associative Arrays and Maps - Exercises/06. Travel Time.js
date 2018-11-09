const solve = (input = ['']) => {
  const countriesToTowns = new Map()
  for (const inputString of input) {
    const [country, town, offer] = inputString.split(' > ')
    if (!countriesToTowns.has(country)) {
      countriesToTowns.set(country, new Map())
    }
    const currCountry = countriesToTowns.get(country)
    currCountry
  }
}

solve([
  'Bulgaria > Sofia > 500',
  'Bulgaria > Sopot > 800',
  'France > Paris > 2000',
  'Albania > Tirana > 1000',
  'Bulgaria > Sofia > 200',
])
