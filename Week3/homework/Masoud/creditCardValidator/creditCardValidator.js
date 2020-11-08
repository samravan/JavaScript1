'use strict'

const validateCreditNumber = (creditCardNumber) => {

  const numStringLength = creditCardNumber.length;

  //Input must be 16 characters
  function checkLength(creditCardNumber) {
    if (numStringLength !== 16){
      return `Invalid! The input ${creditCardNumber} should contains 16 characters!`;
    } else {
      return 'success!';
    }
  }

  //All characters must be numbers
  function checkType(creditCardNumber) {
    const index = [];

    for (let i = 0 ; i < numStringLength ; i++) {
      if (creditCardNumber[i] == 0 || creditCardNumber[i] == 1 || creditCardNumber[i] == 2 || creditCardNumber[i] == 3 || creditCardNumber[i] == 4 || creditCardNumber[i] == 5 || creditCardNumber[i] == 6 || creditCardNumber[i] == 7 || creditCardNumber[i] == 8 || creditCardNumber[i] == 9) {
        
      } else {
        index.push('NaN');
      }
    }
    
    if (index.length !== 0){
      return `Invalid! The input ${creditCardNumber} should contains only numbers!`;
    } else {
      return 'success!';
    }

  }
  
  //At least two different numbers should be represented
  function atLeastTwo(creditCardNumber) {
    const index = [];

    for (let i = 1 ; i < numStringLength - 1 ; i++) {

      if (creditCardNumber[0] !== creditCardNumber[i]) {
        index.push('NaN');
      }
    }
   
    if (index.length == 0){
      return `Invalid! The input ${creditCardNumber} should contains at least 2 different types of numbers!`;
    } else {
      return 'success!';
    }
  }

  //The last number must be even
  function mustEven(creditCardNumber) {
    if (creditCardNumber[numStringLength-1] % 2 == 0) {
      return 'success!';
    } else {
      return `Invalid! The last number must be even`;
    }
  }

 //The sum of all the numbers must be greater than 16
 function sumOf(creditCardNumber){
   let sum = 0;
   for (let i = 0 ; i < creditCardNumber.length ; i++){
     sum += parseInt(creditCardNumber[i]);
   }
   if (sum < 16) {
     return `Invalid! The input ${creditCardNumber} should contains the numbers that must be greater than 16! `
   } else {
     return 'success!';
   }
 }


 //Call and console all Functions
  const array = [];
  const array2 = [];
  array.push(checkLength(creditCardNumber));
  array.push(checkType(creditCardNumber));
  array.push(atLeastTwo(creditCardNumber));
  array.push(mustEven(creditCardNumber));
  array.push(sumOf(creditCardNumber));
  for (let i = 0 ; i < array.length ; i++) {
    if (array[i] !== 'success!') {
      console.log(array[i]);
    } else {
      array2.push(array[i]);
    }
  }
 
  if (array2.length == 5){
    console.log(`Success! The input ${creditCardNumber} is a valid credit card number!`);
  }
};

const creditCardNumber = '879654785248754'; //Sample credit card number!
validateCreditNumber(creditCardNumber); //Call function

