const perfectNum = (number) => {
  var temp = 0;
  // let tempsArr = []
  for(let i = 1; i <= number / 2; i++) {
    if(number % i === 0) {
      temp += i
      // tempsArr.push(i)
    }
  }

  if(temp === number && temp !== 0) {
    console.log("We have a perfect number!")
    // console.log(tempsArr.join(' + '))
  } else {
    console.log("It’s not so perfect.")
  }   
}

perfectNum(6)
// perfectNum(28)
