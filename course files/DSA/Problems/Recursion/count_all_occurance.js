// [1, 2, 4, 2, 4, 2, 6]
// key = 2


function countkeyIA(array, key){
  let count = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] == key) {
      count++
    }
  }
  return count
}


function recurCountKey(array, key, index = 0){
  if (index >= array.length) {
    return 0
  }

  return(array[index] === key ? 1 :0) + recurCountKey(array, key, index + 1)
}