'use strict'
// creating function to change score or point to grade...
function gradeCalculator(point) {
  let grade;
  switch(true) {
    case (point >= 0 && point < 49):
      grade = 'F';
      break;
    case (point >= 50 && point < 59):
      grade = 'E';
      break;
    case (point >= 60 && point < 69):
      grade = 'D';
      break;
    case (point >= 70 && point < 79):
      grade = 'C';
      break;
    case (point >= 80 && point < 89):
      grade = 'B';
      break;
    case (point >= 90 && point <= 100):
      grade = 'A';
      break;
  }
return `You got a ${grade} (${point}%)!` ;

}

//use function
let point = 60;
let grade = gradeCalculator(point);

console.log(grade);//Show output in console