'use strict'

function giveCompliment(name) {
  const compliments = ['awesome', 'smart', 'perfect', 'strong', 'gratful', 'gorgeous', 'helpful', 'clever', 'handsome', 'great', 'cute'];
  const selectOneCompliment = compliments[Math.round(Math.random()*10)];
  return `You are ${selectOneCompliment}, ${name}!`;
}

console.log(giveCompliment('Masoud'));
console.log(giveCompliment('Masoud'));
console.log(giveCompliment('Masoud'));