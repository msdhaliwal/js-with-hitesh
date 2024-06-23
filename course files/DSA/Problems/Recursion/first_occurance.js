// arr = [3, 4, 1, 8, 1, 7];
// findMe = 1;
// currIndex = 0;
// -> Output = 2
// if not found = -1

// iterative
function firstOcc(arr, findMe, currIndex){
  while(currIndex < arr.length){
    if (arr[currIndex] == findMe) {
      return currIndex
    }
    currIndex += 1
  }
  return -1
}

function recursiveFirstOcc(arr, findMe, currIndex){
  if (arr.length === currIndex) {
    return -1
  }

  if (arr[currIndex] == findMe) {
    return currIndex
  }

  return recursiveFirstOcc(arr, findMe, currIndex + 1)
}