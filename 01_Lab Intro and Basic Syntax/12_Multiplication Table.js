const multiplicationTable = (number) => {
  for (let i = 0; i < 10; i++) {
    console.log(`${number} X ${i + 1} = ${number * (i + 1)}`)
  }
}

multiplicationTable(3)