'use strict'
const compliments = ["great", "amazing", "wonderful", "lamentable", "attractive", "merciful", "fair" , "spectacular", "dynamic", "elegant"];
function giveCompliment(name) {
    
    const randCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    const result = console.log(`You are ${randCompliment}, ${name}!`)
    return result; //Am I using return correctly here?
};
giveCompliment('ali')

