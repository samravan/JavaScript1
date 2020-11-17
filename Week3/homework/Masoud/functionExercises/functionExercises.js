//Ex1
function noop() {
}
//-----------------------------------------

//Ex2
function longRondom() {
  console.log(Math.random());
}
longRondom();
//-----------------------------------------

//Ex3
function getLength(string) {
  return string.length;
}
const stringLength = getLength("I'm a perfect man");
console.log(stringLength);

//-----------------------------------------

//Ex4
function multiply(num1, num2) {
  return num1 * num2;
}
const product = multiply(78, 13);
console.log(product);
//------------------------------------------

//Ex5
function addFunctions(num1, num2, string) {
  return multiply(num1, num2) + getLength(string);
}
const sum = addFunctions(12, 10, "I Love You");
console.log(sum);