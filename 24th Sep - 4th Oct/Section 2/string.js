let str = 'Hello';

//charAt()
console.log(str.charAt(1));

//includes()
console.log(str.includes('ll'));

//indexOf()
console.log(str.indexOf('l'));

//slice()
let part = str.slice(1, 4);
console.log(part);

//split()
let parts = str.split('');
console.log(parts);

//replace()
let newStr = str.replace('Hello', 'Hi')

//toLowerCase()/toUpperCase()
let lower = str.toLowerCase();
console.log(lower);

let upper = str.toUpperCase();
console.log(upper);

//trim()
let spaced = '    Hello'
console.log(spaced.trim());

//Use Case: Capitalizing the all letter of a string except first
let capitalized = str.charAt(0).toLowerCase() + str.slice(1).toUpperCase();
console.log(capitalized);