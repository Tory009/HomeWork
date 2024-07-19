
function greetings (name) {
  return `Hello, ${name}`
  }
  console.log(greetings('Mark'))
  console.log(greetings('John'))
  console.log(greetings('Alice'))
  // ========================================
  
  let numbers = [56, 102, 8, 15, 3, 1006, 7, 12, 4]
  
  function getNumbers(array){
    for(i = 0; i <= array.length; i++)
      if(numbers[i] >= 10) {
        console.log(`Это число массива больше десяти ${numbers[i]}`)
      }
    }
      getNumbers(numbers)
  
    // =======================================

  let result = null
  
    function calc(numberOne, numberTwo, sign) {
    //   if (sign == 'minus') {
    //     result = numberOne - numberTwo
    //     console.log(result)
    //   }
    //   else if (sign == 'plus') {
    //     result = numberOne + numberTwo
    //     console.log(result)
    //   }
    //   else if(sign == 'multiply') {
    //     result = numberOne * numberTwo
    //     console.log(result)
    //   }
    //   else if( sign == 'division') {
    //     result = numberOne / numberTwo
    //     console.log(result)
    //   
    // }
    // calc(56, 100, 'plus')
    // calc(42, 7, 'division')
    // calc(8, 50, 'multiply')
    // calc(1087, 88, 'minus')
  


switch(sign){
    case 'minus':
    result = numberOne - numberTwo
    console.log(result)
    break
    case 'plus':
    result = numberOne + numberTwo
    console.log(result)
    break
    case 'division':
    result = numberOne / numberTwo
    console.log(result)
    break
    case 'multiply':
    result = numberOne * numberTwo
    console.log(result)
    break
}
    }

    calc(8, 9, 'multiply')
    calc(1050, 186, 'minus')
    calc(76, 24, 'plus')
    calc(5, 5, 'division')