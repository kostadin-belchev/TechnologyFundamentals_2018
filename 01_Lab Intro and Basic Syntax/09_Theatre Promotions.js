const ticketPrice = (typeOfDay, age) => {
  if (typeOfDay === 'Weekday') {
    if (age >= 0 && age <= 18 || age > 64 && age <= 122) {
      return 12 + '$'
    } else if(age > 18 && age <= 64) {
      return 18 + '$'
    } else {
      return 'Error!'
    }
  } else if (typeOfDay === 'Weekend') {
    if (age >= 0 && age <= 18 || age > 64 && age <= 122) {
      return 15 + '$'
    } else if(age > 18 && age <= 64) {
      return 20 + '$'
    } else {
      return 'Error!'
    }
  } else if (typeOfDay === 'Holiday') {
    if (age >= 0 && age <= 18) {
      return 5 + '$'
    } else if(age > 18 && age <= 64) {
      return 12 + '$'
    } else if (age > 64 && age <= 122) {
      return 10 + '$'
    } else {
      return 'Error!'
    }
  }
}

console.log(ticketPrice('Holiday', 15))