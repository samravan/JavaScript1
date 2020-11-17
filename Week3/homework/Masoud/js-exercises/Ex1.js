'use strict'

function giveCompliment(name) {
  const compliments = ['awesome', 'smart', 'perfect', 'strong', 'gratful', 'gorgeous', 'helpful', 'clever', 'handsome', 'great'];
  const selectOneCompliment = compliments[Math.round(Math.random()*9)];
  return `You are ${selectOneCompliment}, ${name}!`;
}

console.log(giveCompliment('Masoud'));
console.log(giveCompliment('Masoud'));
console.log(giveCompliment('Masoud'));