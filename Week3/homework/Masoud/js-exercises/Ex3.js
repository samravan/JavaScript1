'use strict'

const numChildren = [1, 2, 3, 4, 5];
const partnerNames = ['Olivia', 'Emma', 'Ava', 'Sophia', 'Isabella'];
const location = ['Iran', 'Netherland', 'poland', 'Italy', 'France'];
const job = ['teacher', 'doctor', 'engineer', 'builder', 'police'];

function tellFortune() {

const selectNumChilderen = numChildren[Math.round(Math.random()*4)];
const selectPartnerNames = partnerNames[Math.round(Math.random()*4)];
const selectLocation = location[Math.round(Math.random()*4)];
const selectJob = job[Math.round(Math.random()*4)];

return `You will be a ${selectJob} in ${selectLocation}, married to ${selectPartnerNames} with ${selectNumChilderen} kids.`
}

console.log(tellFortune());
console.log(tellFortune());
console.log(tellFortune());