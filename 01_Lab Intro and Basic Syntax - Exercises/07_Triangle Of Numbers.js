const triangleOfNums = (n) => {
  for (let i = 1; i <= n; i++) {
    let currLine = []
    for (let j = 1; j <= i; j++) {
      currLine.push(i)
    }
    console.log(currLine.join(' '))
  }
}

triangleOfNums(6)