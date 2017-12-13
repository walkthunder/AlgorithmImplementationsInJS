function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function partition (arr, left, right) {
  let pivotIndex = left
  let pivot = arr[right]
  for (let i = left; i < right; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, pivotIndex)
      pivotIndex++
    }
  }
  swap(arr, pivotIndex, right)
  return pivotIndex
}
function quickSort (arr, left, right) {
  if (!Array.isArray(arr)) {
    return new Error('[quickSort]Need array as input')
  }
  if (left >= right) {
    return
  }
  if (left === undefined || left === null) {
    left = 0
  }
  if (right === undefined || right === null) {
    right = Math.max(arr.length - 1, 0)
  }
  console.log(`${left} -- ${right}`)
  let pivotIdx = partition(arr, left, right)
  quickSort(arr, left, pivotIdx - 1)
  quickSort(arr, pivotIdx + 1, right)
  return arr
}
