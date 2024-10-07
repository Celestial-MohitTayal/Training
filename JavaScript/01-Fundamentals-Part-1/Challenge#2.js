const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */

if(BMIMark > BMIJohn){
    console.log(`Mark's BMI is higher than the John's!`)
}else{
    console.log(`John's BMI is higher than Mark's!`)
}

if(BMIMark > BMIJohn){
    console.log(`Mark's BMI (${BMIMark.toFixed(1)}) is higher than the John's (${BMIJohn.toFixed(1)})!`)
}else{
    console.log(`John's BMI (${BMIJohn.toFixed(1)}) is higher than Mark's (${BMIMark.toFixed(1)})!`)
}