'use strict'

let myString = 'hello,this,is,a,difficult,to,read,sentence';

console.log(myString.length);

//----My way--> I like it
let changeStringToArray = [];
for (let i = 0 ; i < myString.length; i++){
  if (myString[i] == ','){
    changeStringToArray[i] =  ' ';
  } else {
    changeStringToArray[i] = myString[i];
  }
}

let perfectSentence = "";
for (let i = 0 ; i < changeStringToArray.length ; i++){
  perfectSentence += changeStringToArray[i];
}

console.log(perfectSentence);


//-----Searched in google-->easy way
console.log(myString.replace(/,/g, ' '));