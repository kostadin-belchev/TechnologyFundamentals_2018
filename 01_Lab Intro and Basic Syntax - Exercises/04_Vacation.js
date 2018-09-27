const getVacationCosts = (peopleCount, typeOfPeople, day) => {
  let totalPrice = 0
  if (typeOfPeople === 'Students') {
    if (day === 'Friday') {
      totalPrice = peopleCount * 8.45
    } else if (day === 'Saturday') {
      totalPrice = peopleCount * 9.80
    } else if (day === 'Sunday') {
      totalPrice = peopleCount * 10.46
    }
    if (peopleCount >= 30) {
      totalPrice *= 0.85
    }
  } else if (typeOfPeople === 'Business') {
    if (peopleCount >= 100) {
      peopleCount -= 10
    }
    if (day === 'Friday') {
      totalPrice = peopleCount * 10.90
    } else if (day === 'Saturday') {
      totalPrice = peopleCount * 15.60
    } else if (day === 'Sunday') {
      totalPrice = peopleCount * 16
    }
  } else if (typeOfPeople === 'Regular') {
    if (day === 'Friday') {
      totalPrice = peopleCount * 15
    } else if (day === 'Saturday') {
      totalPrice = peopleCount * 20
    } else if (day === 'Sunday') {
      totalPrice = peopleCount * 22.50
    }
    if (peopleCount >= 10 && peopleCount <= 20) {
      totalPrice *= 0.95
    }
  }
  return `Total price: ${totalPrice.toFixed(2)}`
}

// console.log(getVacationCosts(30, 'Students', 'Sunday'))
console.log(getVacationCosts(40, 'Regular', 'Saturday'))
