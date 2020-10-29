'use strict'

const drinkTray = [];
const drinkTypes = ['cola', 'lemonade', 'water'];
let num = 0;

for(let i = 0 ; i < 5 ; i++) {

  drinkTray.push(drinkTypes[num]);

  if(i % 2 !== 0){
    num++;
  }
}

console.log('Hey guys, I brought a ' + drinkTray + '!');


// for(let i = 0 ; i < 5 ; i++) {
//   randomNum = Math.round(Math.random()*2);
//   drinkTray.push(drinkTypes[randomNum]);
// }