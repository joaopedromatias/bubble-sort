function bubbleSort(arr: (number | string)[]) {
  const timesToIterateArray = arr.length - 1
  let temp: string | number
  let swapped: boolean

  for (let i = 0; i < timesToIterateArray; i++) {
    swapped = false
    for (let j = 0; j < timesToIterateArray - i; j++) {
      const value = arr[j]
      const nextValue = arr[j + 1]
      if (value > nextValue) {
        temp = value
        arr[j] = nextValue
        arr[j + 1] = temp
        swapped = true
      }
    }
    if (!swapped) break
  }
  return arr
}

const arr = [5, 3, 8, 4, 2, 1, 9, 6, 7]
console.log(bubbleSort(arr))
