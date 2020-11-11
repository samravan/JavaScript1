'use strict'
function validateCreditNumber(num) {
    const array = [];
    for(let i = 0; i < num.length; i++){
        array.push(num[i]);
    }

    //At least two diffrent numbers should be represented
    function similarity(array){
            let firstItem = array[0]
            let x = array.filter(elements => elements == firstItem).length != array.length ? false : true;
            return x 
        }

        //The Sum of all the numbers must be greater than 16:
        let sum = 0
        const lastNum = array[array.length -1];
        for (let i = 0; i < array.length; i++){
                let arrayInt = parseInt(array[i])
                sum += arrayInt
            }

    switch(true){

        //The length of the number
        case num.length !== 16:
            console.log(`Invalid! The input ${num} should be 16 characters!`);
            break;

        //All characters must be numbers
        case num.match(/^[0-9]+$/) == null:
            console.log(`Invalid! The input ${num} should contain only numbers!`);
            break;

        //At least two diffrent numbers should be represented
        case similarity(array) == true:
            console.log(`Invalid! The input ${num} should contain at least 2 different types of numbers!`);
            break;

        //The last number must be even
        case lastNum % 2 !== 0:
            console.log(`Invalid! The last number of the  input ${num} should be even`);
            
            break;
        
        //The Sum of all the numbers must be greater than 16:
        case sum < 16:
            console.log(`Invalid! The sum of the input ${num} should be more than 16`);
            break;

        default:
            console.log(`Success! The input ${num} is a valid credit card number!`)

     };
     
};


validateCreditNumber('66666666666561666');
validateCreditNumber('a92332119c011112');
validateCreditNumber('4444444444444441');
validateCreditNumber('1111111111111110');