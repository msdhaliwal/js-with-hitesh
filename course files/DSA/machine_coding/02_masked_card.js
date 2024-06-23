/*

console.log(maskify('5512103073210694')); 
// 5###########0694
console.log(maskify('4556-3646-0793-5616')); 
// 4###-####-####-5616
console.log(maskify('')); 
// ''
console.log(maskify('paypalisgreat')); 
// paypalisgreat

*/

function maskify(cardNumber){
  if (typeof cardNumber === 'number') {
    cardNumber = cardNumber.toString()
  }
  //optional
  if (cardNumber.length < 6) {
    return cardNumber
  }

  const firstChar = cardNumber[0]
  const lastFourChars = cardNumber.slice(-4)

  let maskedSection = ''

  for (let i = 1; i < array.length - 4; i++) {
    const char = cardNumber[i]
    maskedSection += isNaN(parseInt(char)) ? char : '#' 
    
  }
  return firstChar + maskedSection + lastFourChars
}