'use strict'

const validateCreditNumber = (creditCardNumber) => {

  
  //Input must be 16 characters
  function checkLength(creditCardNumber) {
    if (creditCardNumber.length !== 16){
      return `Invalid! The input ${creditCardNumber} should contains 16 characters!`;
    } else {
      return true;
    }
  }

  //All characters must be numbers
  function checkType(creditCardNumber) {
    const index = [];

    for (let i = 0 ; i < creditCardNumber.length ; i++) {
      if (creditCardNumber[i].match(/[0-9]/g)) {
        
      } else {
        index.push('NaN');
      }
    }
    
    if (index.length !== 0){
      return `Invalid! The input ${creditCardNumber} should contains only numbers!`;
    } else {
      return true;
    }

  }
  
  //At least two different numbers should be represented
  function atLeastTwo(creditCardNumber) {
    const index = [];

    for (let i = 1 ; i < creditCardNumber.length - 1 ; i++) {

      if (creditCardNumber[0] !== creditCardNumber[i]) {
        index.push('NaN');
      }
    }
   
    if (index.length == 0){
      return `Invalid! The input ${creditCardNumber} should contains at least 2 different types of numbers!`;
    } else {
      return true;
    }
  }

  //The last number must be even
  function mustEven(creditCardNumber) {
    if (creditCardNumber[creditCardNumber.length-1] % 2 == 0) {
      return true;
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
     return true;
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
    if (array[i] !== true) {
      console.log(array[i]);
    } else {
      array2.push(array[i]);
    }
  }
 
  if (array2.length == 5){
    console.log(`Success! The input ${creditCardNumber} is a valid credit card number!`);
  }
};

const creditCardNumber = '6587458965845896'; //Sample credit card number!
validateCreditNumber(creditCardNumber); //Call function

