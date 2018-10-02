const solve = (num) => {
    let sum = 0
    for (const digit of num.toString()) {
        sum += Number(digit)
    }
    return sum.toString().includes(9) ? `${num} Amazing? True` : `${num} Amazing? False`
}

console.log(solve(583472))