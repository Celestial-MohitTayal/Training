//given a string revrese each word of the sentence
var str = "How are you?";

var savedStr = str.split(" ").map((word) => {
  return word.split("").reverse().join("");
});

console.log(savedStr.join(" "));

//how to chek whether object is an array or not?
function checkArray(elem) {
  return Array.isArray(elem);
}
console.log(checkArray([]));
console.log(checkArray({}));

//how to empty an array in js
var arr = [1, 2, 3, 4, 5];
console.log(arr.length);
arr.length = 0;
console.log(arr);

//check whether number is integer or not
let a = 12;
if (a % 1 === 0) {
  console.log("Integer");
} else {
  console.log("Not Integer");
}
//OR
console.log(Number.isInteger(a));



//make this work -> duplicate([1,2,3,4,5]) => [1,2,3,4,5,1,2,3,4,5]
function duplicate(arr){
  return arr.concat(arr);
}

console.log(duplicate([1,2,3,4,5]));