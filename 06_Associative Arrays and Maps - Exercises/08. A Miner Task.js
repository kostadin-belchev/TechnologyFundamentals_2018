const solve = (input = ['']) => {
  const resourceToQuantity = new Map()

  input.map((string, index, arr) => {
    if (index % 2 === 0) {
      // resource
      if (!resourceToQuantity.has(string)) {
        resourceToQuantity.set(string, 0)
      }
      const newQuantity = resourceToQuantity.get(string) + Number(arr[index + 1])
      resourceToQuantity.set(string, newQuantity)
    }
  })

  let result = []
  for (const keyValuePair of resourceToQuantity) {
    keyValuePair
    result.push(`${keyValuePair[0]} -> ${keyValuePair[1]}`)
  }
  return result.join('\n')
}

console.log(solve(['Gold', '155', 'Silver', '10', 'Copper', '17']))
console.log(solve(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']))
