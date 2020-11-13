'use strict'
const shoppingCart = ['bananas', 'milk'];
function addToShoppingCart(item){
    shoppingCart.push(item);
    for(let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart.length > 3) {
        shoppingCart.shift();
    }
};
    const result = console.log(`You bought ${shoppingCart}!`);
    return result;
};
addToShoppingCart('chocolate');
addToShoppingCart('waffles');
addToShoppingCart('tea');
addToShoppingCart('apple');