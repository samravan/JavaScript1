function calculategrades(gradeInput) {
    let result = 0;
    let gPercent = `${(gradeInput * 100) / 100}%`; //using this calculation to make the percentage of the grade.
    switch (Math.floor(gradeInput/10)) {    //Using Math.floor to round grades to largest integer and then read the reletive condition in the switch.
        case 9:
            result = "A"; 
            break;
        case 8:
            result = "B"
            break; 
        case 7:
            result = "C"
            break;
        case 6:
            result = "D"
            break;
        case 5:
            result = "E"
            break;
        case 4:
            result = "F"
            break;
        case 3:
            result = "F"
            break;
        case 2:
            result = "F"
            break;
        case 1:
            result = "F"
            break;
        case 0:
            result = "F"
            break;
    }
   return `You got a ${result} (${gPercent})!`
}
let x = calculategrades(96);
console.log(x);


// console.log(`${grades(1)}`)

