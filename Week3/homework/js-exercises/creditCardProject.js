'use strict'
function validateCreditNumber(num) {
    const items = num.split('')
    for (let i = 0; i < items.length; i++){
        if(items[i] == items[i] + 1){
            let result = console.log("doroste")
            
        }
        
    }
    
    switch(false){
    //The length of the number
        case num.length <= 16:
            console.log(`Invalid! The input ${num} should be 16 characters!`)
        break;
        //All characters must be numbers
        case num.match(/^[0-9]+$/) != null:
            console.log(`Invalid! The input ${num} should contain only numbers!`)
        break;
        //At least two diffrent numbers should be represented
        case result == "dorost":
            console.log(`Invalid! The input ${num} should contain at least 2 different types of numbers!`)
            break;
         

         
    };

    // num.forEach(element => {
    //     console.log(element)
        
    // });
    // if(num.length <= 16){
    //     console.log("True");
    // } else{
    //     console.log(`Invalid! The input ${num} should be 16 characters!`);
    // };
    // //All characters must be numbers
    // if(num.match(/^[0-9]+$/) != null){
    //     console.log("true")
    // }else {
    //     console.log(`Invalid! The input ${num} should contain only numbers!`)
    // }
    
        
    
};



validateCreditNumber('4444444444444444');