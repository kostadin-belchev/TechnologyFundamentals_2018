const solve = (array = [(stock = ['']), (ordered = [''])]) => {
  const [stockArray, ordersArray] = array
  const stockObj = stockArray.reduce((acc, currValue, index, arr) => {
    if (index % 2 === 0) {
      acc[currValue] = Number(arr[index + 1])
    }
    return acc
  }, {})

  for (let i = 0; i < ordersArray.length; i += 2) {
    const currentStockQty = stockObj[ordersArray[i]]
    stockObj[ordersArray[i]] = (currentStockQty || 0) + Number(ordersArray[i + 1])
  }

  return stockObj
}

console.log(
  solve([
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'],
  ])
)
