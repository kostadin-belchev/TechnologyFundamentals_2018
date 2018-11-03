const solve = (array = ['']) => {
  for (const command of array) {
    if (command === 'Bake It!') {
      break
    }
    const currBatch = command.split('#').map(Number)
    let currBatchSum = currBatch.reduce((acc, nextValue) => acc + nextValue)
    let currBatchAverageQuality = currBatchSum/currBatch.length

    if (currBatchSum > bestBatchSum) {
      bestBatchSum = currBatchSum
      bestBatch = currBatch
    }

    if (currBatchSum === bestBatchSum) {
      if (currBatchAverageQuality > bestAverageQuality) {
        bestAverageQuality = currBatchAverageQuality
        bestBatch = currBatch
      }

      if (currBatchAverageQuality - bestAverageQuality < Number.EPSILON) {
        if (currBatch.length < bestBatch.length) {
          bestBatch = currBatch
        }
      }
    }
  }
  return `Best Batch quality: ${bestBatchSum}\n${bestBatch.join(' ')}`
}

// console.log(solve(['5#4#10#-2', '10#5#2#3#2', 'Bake It!']))
console.log(solve(['5#3#2', '10#2#-2#1#-1', '4#2#1', 'Bake It!']))
