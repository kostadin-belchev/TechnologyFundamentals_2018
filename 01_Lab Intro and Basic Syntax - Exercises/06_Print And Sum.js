const printAndSum = (fromNum, toNum) => {
  let nums = []
  for (let i = fromNum; i <= toNum; i++) {
    nums.push(i)
  }
  console.log(nums.join(' '))
  return `Sum: ${nums.reduce((a, b) => a + b)}`
}

console.log(printAndSum(5, 10));
