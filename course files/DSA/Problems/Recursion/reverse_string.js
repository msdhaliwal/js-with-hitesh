// Reverse a string 

// iterative
// Hello

function reverseString(string){
  let reverse = ""
  let length = string.length - 1

  while(length >= 0){
    reverse = reverse + string[length]
    length = length - 1
  }
  return reverse
}
// console.log(reverseString('hello'))

function recursiveReverseString(string){
  console.log(`current string: ${string}`)
  //base case
  if (string === "") {
    return string
  }
  
  // return string[string.length - 1] + recursiveReverseString(string.substring(0, string.length - 1))

  let reversePart =  recursiveReverseString(string.substring(0, string.length - 1))
  let result = string[string.length - 1] + reversePart
  
  console.log(`Reversing: Last char: ${string[string.length- 1]} added in front of ${reversePart} to form a result: ${result}`)
  
  return result
}

console.log(recursiveReverseString('Hello'))