let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);


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


massJohn = 85;
heightJohn = 1.76;

massMark = 95;
heightMark = 1.88;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);


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