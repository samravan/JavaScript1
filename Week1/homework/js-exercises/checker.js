let x1 = "string";
let x2 = "string2";
let x3 = 3 ;
let x4 = 4;
console.log(typeof(x1));
console.log(typeof (x2));
console.log(typeof(x3));
console.log(typeof(x4));
function compare () {
    if (typeof(x1) == typeof(x2)) {
        console.log("SAME TYPE");
        }
        console.log("NOT THE SAME TYPE")
    if (typeof(x1) == typeof(x3)) {
        console.log("SAME TYPE");
        }
        console.log("NOT THE SAME TYPE")
    if (typeof(x1) == typeof(x4)) {
        console.log("SAME TYPE");
        }
        console.log("NOT THE SAME TYPE")
    if (typeof(x2) == typeof(x3)) {
        console.log("SAME TYPE");
        }
        console.log("NOT THE SAME TYPE")
    if (typeof(x2) == typeof(x4)) {
        console.log("SAME TYPE");
        }
        console.log("NOT THE SAME TYPE")
    if (typeof(x3) == typeof(x4)) {
        console.log("SAME TYPE");
        }
        console.log("NOT THE SAME TYPE")
}
compare()