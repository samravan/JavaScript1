'use strict';
function typeCheck(first, second)
{
  if(typeof first == typeof second){console.log("SAME TYPE");}
  else{ console.log("Not the same...")};
}

let var1 = "I'm a string";
let var2 = "I'm a string too";
let var3 = 
{
  name: "Mas",
  address: "Kerman"
}
let var4 =
{
  name: "Akbar",
  address: "Tehran"
}
console.log(var1 + " & " + var2);
typeCheck(var1, var2);
console.log(var1 + " & " + var3);
typeCheck(var1, var3);
console.log(var1 + " & " + var4);
typeCheck(var1, var4);
console.log(var2 + " & " + var3);
typeCheck(var2, var3);
console.log(var2 + " & " + var4);
typeCheck(var2, var4);
console.log(var3 + " & " + var4);
typeCheck(var3, var4);