const solve = (password = '') => {
  let isValid = true
  const checkPasswordLength = (pass = '') => {
    if (pass.length < 6 || pass.length > 10) {
      console.log('Password must be between 6 and 10 characters')
      isValid = false
    }
  }

  const checkPasswordSholdBeLettersAndDigits = (pass = '') => {
    let regex = /^[A-Za-z0-9]+$/
    if (!regex.test(pass)) {
      console.log('Password must consist only of letters and digits')
      isValid = false
    }
  }

  const checkPasswordLengthForTwoDigits = (pass = '') => {
    let regex = /\d{2}/
    if (!regex.test(pass)) {
      console.log('Password must have at least 2 digits')
      isValid = false
    }
  }

  checkPasswordLength(password)
  checkPasswordSholdBeLettersAndDigits(password)
  checkPasswordLengthForTwoDigits(password)
  if (isValid) {
    console.log('Password is valid')
  }
}

// solve('logIn')

// solve('MyPass123')

solve('Pa$s$s')