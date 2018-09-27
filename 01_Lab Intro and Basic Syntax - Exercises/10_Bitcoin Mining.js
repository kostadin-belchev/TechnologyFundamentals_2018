const bitcoins = (array = []) => {
  const LEVA_PER_GRAM_OF_GOLD = 67.51
  const SINGLE_BITCOIN_PRICE = 11949.16
  array = array.map(Number)
  let dayOfFirstBitcoin = 0
  let currBalanceMoney = 0
  let bitcoinCount = 0
  
  for (let i = 0; i < array.length; i++) {
    let minedGoldForDay = array[i]
    if ((i + 1) % 3 == 0) {  // i + 1 is the current day
      minedGoldForDay = minedGoldForDay * 0.70
    }
    let moneyForTheDay = minedGoldForDay * LEVA_PER_GRAM_OF_GOLD
    currBalanceMoney += moneyForTheDay
    while (currBalanceMoney >= SINGLE_BITCOIN_PRICE) {
      bitcoinCount++
      currBalanceMoney -= SINGLE_BITCOIN_PRICE
    }
    if (bitcoinCount > 0 && dayOfFirstBitcoin == 0) {
      dayOfFirstBitcoin = i + 1
    }
  }


  // Output
  console.log(`Bought bitcoins: ${bitcoinCount}`)
  if (bitcoinCount > 0) {
    console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`)
  }
  console.log(`Left money: ${currBalanceMoney.toFixed(2)} lv.`)
}

// bitcoins(['100','200', '300'])
bitcoins(['3124.15','504.212', '2511.124'])
