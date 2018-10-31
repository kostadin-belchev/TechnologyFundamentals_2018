const solve = (seqOfNums = [], bombNums = []) => {
  const [bombNumber, power] = bombNums;
  while (seqOfNums.includes(bombNumber)) {
    const indexOfBombNum = seqOfNums.indexOf(bombNumber);
    const indexToStartRemovingFrom = Math.max(0, indexOfBombNum - power);
    const itemsToRemove = power * 2 + 1;
    seqOfNums.splice(indexToStartRemovingFrom, itemsToRemove);
  }
  let sum = 0;
  for (const num of seqOfNums) {
    sum += num;
  }
  return sum;
};

// solve([1, 2, 2, 4, 2, 2, 2, 9],  [4, 2])

// console.log(  solve([1, 4, 4, 2, 8, 9, 1],    [9, 3]    ));
console.log(solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]));
