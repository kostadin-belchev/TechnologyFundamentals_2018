const login = (array = ['']) => {
  let username = array[0]
  let password = reverseString(username)
  password
  for (let i = 1; i < array.length; i++) {
    const element = array[i];
    if (element === password) {
      console.log(`User ${username} logged in.`)
      return
    }
    if (i === 4) {
      console.log(`User ${username} blocked!`);
      return
    } else {
      console.log('Incorrect password. Try again.')
    }
  }
  function reverseString(str = '') {
    return str.split('').reverse().join('')
  }
}


// login(['Acer','login','go','let me in','recA'])
login(['sunny','rainy','cloudy','sunny','not sunny'])