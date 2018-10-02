const solve = (numOne, numTwo, numThree) => {
    let sum = numOne + numTwo + numThree
    let isInteger = Number.isInteger(sum)
    console.log(`${sum} - ${isInteger ? 'Integer' : 'Float'}`)
}