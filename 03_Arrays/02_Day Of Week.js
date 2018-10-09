const solve = (number) => {
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  if (number >= 1 && number <= 7) {
    return days[number - 1]
  } else {
    return 'Invalid day!'
  }
}

console.log(solve(6))