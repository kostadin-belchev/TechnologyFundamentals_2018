const getPriceForTrip = (distance, numOfPassengers, priceForLeterOfDiesel) => {
  // let baseConsumption = 7 // liters per 100 Km
  // let actualConsumption = baseConsumption + numOfPassengers* 0.1
  // actualConsumption
  // let neededFuel = (distance * actualConsumption) / 100 // liters
  // neededFuel
  // let moneyNeeded = neededFuel * priceForLeterOfDiesel
  // return `Needed money for that trip is ${moneyNeeded.toFixed(3)} lv`
  let neededFuel = (distance / 100) * 7
  neededFuel += numOfPassengers * 0.100
  let money = neededFuel * priceForLeterOfDiesel
  return `Needed money for that trip is ${money}lv.`
}

console.log(getPriceForTrip(260, 9, 2.49))
console.log(getPriceForTrip(90, 14, 2.88))
