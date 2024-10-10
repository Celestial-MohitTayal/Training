//Loop an array and add all members of it
var arr = [1, 2, 3, 4, 5];
var sum = 0;
arr.forEach((elem) => {
  sum = sum + elem;
});

console.log(sum);



//Array of num and string add only number
var arr = [1, 'a', 2, 'b', 3];
var sum = 0;
arr.forEach((elem) => {
    if(typeof elem === 'number') sum = sum + elem;
})

console.log(sum);



//loop an array of objects and remove all the objects whose gender is not male
var arr = [
    {gender: 'male'},
    {gender: 'female'},
    {gender: 'not speified'}
]

let newArr = arr.filter((elem) => {
    return elem.gender === 'male';
})
console.log(newArr);