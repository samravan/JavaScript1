'use strict'

const drinkTray = [];
const drinkTypes = ['cola', 'lemonade', 'water'];
let num = 0;
let courser = 0;

for(let i = 0 ; i < 5 ; i++) {

  drinkTray.push(drinkTypes[num]);
  courser++;

  if(courser == 2){
    num++;
    courser = 0;
  }

  if (num == drinkTypes.length){
    num = 0;
  }
}

const finalSentence = drinkTray.join(', ');
console.log('Hey guys, I brought a ' + finalSentence + '!');