const solve = (array = ['']) => {
  let batches = array.slice(0, array.length - 1)
  let result = batches.sort((a, b) => {
    const aBatch = a.split('#').map(Number)
    const bBatch = b.split('#').map(Number)
    const aSum = aBatch.reduce((x, y) => x + y)
    const bSum = bBatch.reduce((x, y) => x + y)
    const aAverageQuality = aSum/aBatch.length
    const bAverageQuality = bSum/bBatch.length
    
    if (aSum !== bSum) {
      return bSum - aSum
    }

    if (aAverageQuality !== bAverageQuality) {
      return bAverageQuality - aAverageQuality
    }
    
    return aBatch.length - bBatch.length
  })

  result = result.map(batch => batch.split('#').map(Number))
  const bestBatchQuality = result[0].reduce((a, b) => a + b)
  const bestBatchFormatted = result[0].join(' ')
  return `Best Batch quality: ${bestBatchQuality}\n${bestBatchFormatted}`
}

// console.log(solve(['5#4#10#-2', '10#5#2#3#2', '10#8#2#3#2', 'Bake It!']))
console.log(solve(['5#3#2', '10#2#-2#1#-1', '4#2#1', 'Bake It!']))
