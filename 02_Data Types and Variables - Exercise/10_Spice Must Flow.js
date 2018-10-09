const spiceCalculator = (startingYield) => {
  let days = 0
  let amountOfSpice = 0
  let currentYield = startingYield
  while (currentYield >= 100) {
      days++
      amountOfSpice += currentYield
      if (amountOfSpice >= 26) { // Note that the workers cannot consume more spice than there is in storage. 
        amountOfSpice -= 26
      }
      currentYield -= 10
  }
  // abandon source
  if (amountOfSpice >= 26) { // Note that the workers cannot consume more spice than there is in storage. 
    amountOfSpice -= 26
  }
  console.log(days)
  console.log(amountOfSpice)
}

spiceCalculator(111)