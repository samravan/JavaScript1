'use strict'

const validateCreditNumber = (creditCardNumber) => {

  
  //Input must be 16 characters
  function checkLength(creditCardNumber) {
    if (creditCardNumber.length !== 16){
      return false;
    } else {
      return true;
    }
  }

  //All characters must be numbers
  function checkType(creditCardNumber) {
    for (let i = 0 ; i < creditCardNumber.length ; i++) {
      if (!creditCardNumber[i].match(/[0-9]/g)) {
        return false;
      }
    }
    return true;
  }
  
  //At least two different numbers should be represented
  function atLeastTwo(creditCardNumber) {
    for (let i = 1 ; i < creditCardNumber.length ; i++) {
      if (creditCardNumber[0] !== creditCardNumber[i]) {
        return true;
      }
    }
   return false;
  }

  //The last number must be even
  function mustEven(creditCardNumber) {
    if (creditCardNumber[creditCardNumber.length-1] % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }

 //The sum of all the numbers must be greater than 16
 function sumOf(creditCardNumber){
   let sum = 0;
   for (let i = 0 ; i < creditCardNumber.length ; i++){
     sum += parseInt(creditCardNumber[i]);
   }
   if (sum < 16) {
     return false;
   } else {
     return true;
   }
 }



//Call and console all Functions
const array = [];

if (!checkLength(creditCardNumber)){
  array.push(`Invalid! The input ${creditCardNumber} should contains 16 characters!`);
}

if (!checkType(creditCardNumber)){
  array.push(`Invalid! The input ${creditCardNumber} should contains only numbers!`);
}

if (!atLeastTwo(creditCardNumber)){
  array.push(`Invalid! The input ${creditCardNumber} should contains at least 2 different types of numbers!`);
}

if (!mustEven(creditCardNumber)){
  array.push(`Invalid! The last number must be even`);
}

if (!sumOf(creditCardNumber)){
  array.push(`Invalid! The input ${creditCardNumber} should contains the numbers that must be greater than 16!`);
}

if (array.length == 0){
   console.log(`Success! The input ${creditCardNumber} is a valid credit card number!`)
} else {
  for (let i = 0 ; i < array.length ; i++) {
    console.log(array[i]);
  }
}
};

const creditCardNumber = '1111111111111112'; //Sample credit card number!
validateCreditNumber(creditCardNumber); //Call function

