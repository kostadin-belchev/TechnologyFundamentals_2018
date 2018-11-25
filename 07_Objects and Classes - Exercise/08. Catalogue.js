const solve = (input = ['']) => {
  const productNamesToPrices = new Map()
  for (const inputString of input) {
    const [productName, productPrice] = inputString.split(' : ')
    productNamesToPrices.set(productName, Number(productPrice))
  }
  const sortedProducts = [...productNamesToPrices].sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()))

  let setOfInitialLetters = new Set()
  for (const keyValuePair of sortedProducts) {
    const firstLetter = keyValuePair[0][0]
    setOfInitialLetters.add(firstLetter)
  }

  for (const letter of setOfInitialLetters) {
    console.log(letter)
    for (const keyValuePair of sortedProducts) {
      if (keyValuePair[0][0] === letter) {
        console.log(`\t${keyValuePair[0]}: ${keyValuePair[1]}`)
      }
    }
  }
}

solve([
  'Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10',
])
