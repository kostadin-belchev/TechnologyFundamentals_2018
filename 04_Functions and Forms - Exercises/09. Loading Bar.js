const progressBar = (progress) => {
  let numOfPercentages = progress / 10
  const PERCENTAGE_SIGN = '%'
  const DOT_SIGN = '.'

  let numOfDots = 10 - numOfPercentages
  if (progress === 100) {
    return `${progress}% Complete!\n[${PERCENTAGE_SIGN.repeat(numOfPercentages)}${DOT_SIGN.repeat(numOfDots)}]`
  } else {
    return `${progress}% [${PERCENTAGE_SIGN.repeat(numOfPercentages)}${DOT_SIGN.repeat(numOfDots)}]\nStill loading...`
  }
}

console.log(progressBar(30))
console.log(progressBar(50))
console.log(progressBar(100))

