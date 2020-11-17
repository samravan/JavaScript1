'use strict'

const cardForParty = {
  beers : 2.22,
  bread : 1.8,
  tea : 4,
  cola : 8,
  tomato : 3
}

function calculateTotalPrice(card) {
  let totalPrice = 0;
  for (let property in card){
    totalPrice += card[property];
  }
  return `Total: \u20ac${totalPrice}`;
}

console.log(calculateTotalPrice(cardForParty));