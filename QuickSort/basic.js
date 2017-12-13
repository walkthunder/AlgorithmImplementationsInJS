function quickSort (arr) {
  if (!Array.isArray(arr)) {
    return new Error('Invalid parameters. Need an array as input.')
  }
  if (arr.length <= 1) {
    return arr
  }
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0]
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}

// Usage:
let arr = [3, 7, 8, 5, 2, 1, 9, 5, 4]
console.log('sort result - ', quickSort(arr))