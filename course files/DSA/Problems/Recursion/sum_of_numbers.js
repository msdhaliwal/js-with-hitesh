// sum of numbers till N

function getASum(value){

  if (value == 1) {
    return value
  } else {
    return value + getASum(value - 1)
  }

}