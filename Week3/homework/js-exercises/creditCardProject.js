'use strict'
function validateCreditNumber(num) {
    const array = [];
    for(let i = 0; i < num.length; i++){
        array.push(num[i]);
    }
  
   
    
    //Soloution 1
    
    const items = num.split('')

    if(num.length <= 16){
        console.log("True");
    } else{
        console.log(`Invalid! The input ${num} should be 16 characters!`);
    };

    //All characters must be numbers

    if(num.match(/^[0-9]+$/) != null){
        console.log("true")
    }else {
        console.log(`Invalid! The input ${num} should contain only numbers!`)
    }
    
    //At least two diffrent numbers should be represented
    function similarity(array){
        let firstItem = array[0]
        let x = array.filter(elements => elements == firstItem).length
        return x != array.length ? false : true;
    }
    console.log(similarity(array))

    //The last number must be even
    if(array.pop() % 2 == 0) {
        console.log("the last is even");
    }else{
        console.log("the last is odd")
    }
        

    //Soloution2

    // switch(false){
    // //The length of the number
    //     case num.length <= 16:
    //         console.log(`Invalid! The input ${num} should be 16 characters!`)
    //     break;
    //     //All characters must be numbers
    //     case num.match(/^[0-9]+$/) != null:
    //         console.log(`Invalid! The input ${num} should contain only numbers!`)
    //     break;
    //     //At least two diffrent numbers should be represented
  

     // };
};



validateCreditNumber('6666666666666661');