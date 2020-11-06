'use strict'

const shoppingCard = ['banana', 'milk'];

function addToShoppingCard(add) {

  if (shoppingCard.length <= 2){
    shoppingCard.push(add);
  } else {
    shoppingCard.shift();
    shoppingCard.push(add);
  }
  const shoppingCardString = shoppingCard.join(', ');
  return `You bought ${shoppingCardString}!`;
}

console.log(addToShoppingCard('bread'));
console.log(addToShoppingCard('tomato'));
console.log(addToShoppingCard('rice'));

