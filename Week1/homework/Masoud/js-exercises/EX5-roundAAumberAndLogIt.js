'use strict';

let z = 7.25;
console.log(z);

let a = Math.round(z);
console.log(a);

let greater;

if (a >= z) {
  greater = a;
} else {
  greater = z;
}

console.log(greater);