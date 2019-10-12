function multiply(first, second) {
  let array = []

  const firstArr = first.split('').reverse()
  const secondArr = second.split('').reverse()

  for (let i = 0; i < firstArr.length; i++) {
    for (let j = 0; j < secondArr.length; j++) {
      multiply = firstArr[i] * secondArr[j]
      array[i + j] = array[i + j] ? array[i + j] + multiply : multiply
    }
  }
  for (let i = 0; i < array.length; i++) {
    const unit = array[i] % 10
    const decimal = Math.floor(array[i] / 10)
    array[i] = unit
    if (array[i + 1]) {
      array[i + 1] += decimal
    }
    else if (decimal !== 0) {
      array[i + 1] = decimal
    }
  }
  return array.reverse().join('')
}

module.exports = multiply
