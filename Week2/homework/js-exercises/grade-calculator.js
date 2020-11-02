function grades(gradeInput) {
    let gPercent = `${(gradeInput * 100) / 100}%`; //using this calculation to make the percentage of the grade.
    switch (Math.floor(gradeInput/10)) {    //Using Math.floor to round grades to largest integer and then read the reletive condition in the switch.
        case 9:
        console.log(`You got a A (${gPercent})!`) 
        break;
        case 8:
        console.log(`You got a B (${gPercent})!`)
        break; 
        case 7:
        console.log(`You got a C (${gPercent})!`)
        break;
        case 6:
        console.log(`You got a D (${gPercent})!`)
        break;
        case 5:
        console.log(`You got a E (${gPercent})!`)
        break;
        case 4:
        console.log(`You got a F (${gPercent})!`)
        break;
        case 3:
        console.log(`You got a F (${gPercent})!`)
        break;
        case 2:
        console.log(`You got a F (${gPercent})!`)
        break;
        case 1:
        console.log(`You got a F (${gPercent})!`)
        break;
        case 0:
        console.log(`You got a F (${gPercent})!`)
        break;
    }
}
grades(96);


