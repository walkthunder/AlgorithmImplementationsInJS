function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function randomPartition (arr, left, right) {
  let randomIdx = Math.floor(Math.random() * (right - left)) + left
  let pivot = arr[randomIdx]
  swap(arr, randomIdx, right)
  let storeIdx = left
  for (let i = left; i < right; i++) {
    if (arr[i] <= pivot) {
      swap(arr, i, storeIdx)
      storeIdx++
    }
  }
  swap(arr, storeIdx, right)
  return storeIdx
}

function quickSort (arr, left, right) {
  if (!Array.isArray(arr)) {
    return new Error('Invalid array parameter')
  }
  if (left >= right) {
    return
  }
  if (left === null || left === undefined) {
    left = 0
  }
  if (right === null || right === undefined) {
    right = arr.length - 1
  }
  let idx = randomPartition(arr, left, right)
  quickSort(arr, left, idx - 1)
  quickSort(arr, idx + 1, right)
  return arr
}

// Usage:
let arr = [3, 4, 2, 8, 1, 7, 6, 0]
console.log(`${arr} could be sorted to ${quickSort(arr)}`)