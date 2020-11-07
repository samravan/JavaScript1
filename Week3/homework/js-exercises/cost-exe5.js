'use strict'
const cartForParty = {
    beer: 1,
    chips: 2,
    fruits: 3,
    dough: 4,
    water: 5
}

let total = 0;
function calculateTotalPrice(item) {
    for (let i = 0; i < Object.keys(item).length; i++) {
        
        const arrValues = Object.values(item);
        total += arrValues[i];
        
    };
    const result = console.log(`Total: €${total}`);
    return result;
};

calculateTotalPrice(cartForParty);



