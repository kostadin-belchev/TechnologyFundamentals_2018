const solve = (nums = [Number]) => {
  while (nums.length > 1) {
    let condensed = [nums.length - 1]
    for (let i = 0; i < nums.length - 1; i++) {
      condensed[i] = nums[i] + nums[i + 1]
    }
    nums = condensed
  }
  return nums[0]
}

console.log(solve([2,10,3]))
console.log(solve([5,0,4,1,2]))
console.log(solve([1]))