/* Write your code below. Good luck! 🙂 */
function BMI(mass, height) {
  return mass / (height * height);
}

let massMark;
let heightMark;
let massJohn;
let heightJohn;

let BMIMark;
let BMIJohn;
let markHigherBMI;

massJohn = 92;
heightJohn = 1.95;

massMark = 78;
heightMark = 1.69;

BMIJohn = BMI(massJohn, heightJohn);
BMIMark = BMI(massMark, heightMark);
console.log(BMIMark);
console.log(BMIJohn);
markHigherBMI = BMIJohn > BMIMark ? BMIJohn : BMIMark;
console.log(markHigherBMI);

massJohn = 85;
heightJohn = 1.76;

massMark = 95;
heightMark = 1.88;

BMIJohn = BMI(massJohn, heightJohn);
BMIMark = BMI(massMark, heightMark);
console.log(BMIMark);
console.log(BMIJohn);
markHigherBMI = BMIJohn > BMIMark ? BMIJohn : BMIMark;
console.log(markHigherBMI);
