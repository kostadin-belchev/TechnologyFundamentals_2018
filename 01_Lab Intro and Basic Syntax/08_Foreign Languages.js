const getSpokenLanguage = (countryName) => {
  if (countryName === 'USA' || countryName === 'England') {
    return 'English'
  } else if (countryName === 'Spain' || countryName === 'Argentina' || countryName === 'Mexico') {
    return 'Spanish'
  } else {
    return 'unknown'
  }
}

console.log(getSpokenLanguage('Mexico'))