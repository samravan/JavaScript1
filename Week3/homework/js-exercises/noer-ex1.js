'use strict'
const compliments = ["great", "amazing", "wonderful", "lamentable", "attractive", "merciful", "fair" , "spectacular", "dynamic", "elegant"];
function giveCompliment(name) {
    
    const randCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    const result = console.log(`You are ${randCompliment}, ${name}!`)
    return result; //I've tried to use "return" without console.log but it didn't return anything! Why?
};
giveCompliment('ali')
// const x = giveCompliment('ali');
// const y = giveCompliment('ali');
// const z = giveCompliment('ali');
// console.log(x);
// console.log(y);
// console.log(z);
