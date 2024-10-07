const arr = [1,2,3, 'Mohit'];

arr.push(4)                             //Adding last element at the end of an array - O(1)
arr.unshift(0)                          //Adding element at the beginning of an array - O(n)
arr.pop()                               //Removing last element of an array - O(1)
arr.shift();                            //Removing first element in array - O(n) 
arr.splice(1, 1, 0);                    // Removed and added 0 at the 1st index of an array
let arrSlice = arr.slice(1, 3);         //created subarray from index 1 to 3
let arrConcat = arr.concat([4,5]);      //merge [4, 5] in existing array
let found = arr.find(x => x > 2);       //checked for an element greater than 2
let index = arr.findIndex(x => x > 2);  //index at hat element is greater than 2

console.log(arr);
console.log(arrSlice);
console.log(arrConcat);
console.log(found);
console.log(index);

