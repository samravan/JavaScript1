'use strict'
function giveCompliment(name) {
    const compliments = ["great", "amazing", "wonderful", "lamentable", "attractive", "merciful", "fair" , "spectacular", "dynamic", "elegant"];
    const randCompliment = compliments[Math.floor(Math.random() * compliments.length)];

    return `You are ${randCompliment}, ${name}!`; //I've tried to use "return" without console.log but it didn't return anything! Why?
};
// giveCompliment('ali')
const x = giveCompliment('ali');
const y = giveCompliment('ali');
const z = giveCompliment('ali');
console.log(x);
console.log(y);
console.log(z);
