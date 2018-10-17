const solve = (kW, age) => {
  let powerPrice = Number(kW)
  return `${calculate(power)} lv.`

  function calculate(power) {
    let tax = 0
    if (power > 110) {
      tax = power * 1.54
    } else if (power > 74) {
      tax = power * 1.38
    } else if (power > 55) {
      tax = power * 0.68
    } else if (power > 37) {
      tax = power * 0.50
    } else {
      tax = power * 0.43
    }
    return tax.toFixed(2)
  }
}