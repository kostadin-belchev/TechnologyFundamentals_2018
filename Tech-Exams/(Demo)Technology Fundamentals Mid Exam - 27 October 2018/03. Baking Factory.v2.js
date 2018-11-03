const solve = (array = ['']) => {
  array = array.slice(0, array.length - 1)
  const batches = array.map(batch => batch.split('#').map(Number))
  const sortingFunc = (a, b) => {
    const aSum = a.reduce((x, y) => x + y)
    const bSum = b.reduce((x, y) => x + y)
    const aAverageQuality = aSum/a.length
    const bAverageQuality = bSum/b.length
    
    if (aSum !== bSum) {
      return bSum - aSum
    }

    if (aAverageQuality !== bAverageQuality) {
      return bAverageQuality - aAverageQuality
    }

    return a.length - b.length
  }

  batches.sort(sortingFunc)
  const bestBatchQuality = batches[0].reduce((a, b) => a + b)
  const bestBatchFormatted = batches[0].join(' ')
  return `Best Batch quality: ${bestBatchQuality}\n${bestBatchFormatted}`
}

// console.log(solve(['5#4#10#-2', '10#5#2#3#2', '10#8#2#3#2', 'Bake It!']))
console.log(solve(['5#3#2', '10#2#-2#1#-1', '4#2#1', 'Bake It!']))
