const set = new Set([1, 2, 3]);

set.add(4);                             //to add the new value we use add method
set.add(4);                             //if add duplicate it will ignore the new value
console.log(set.has(4));                //to check whether set contains the given value
set.delete(3);                          //to delete the value in set
console.log(set.size);                  //to check the size of set we use set method

for(const item of set) {
    console.log(item);
}

set.clear();                            //to clear the set


//UseCase1: Removing Duplicates from Arrays
let numbers = [1, 2, 3, 4, 5, 5, 6];

let uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);


//UseCase2: Performing Set Operations (Intersection, Union, Difference)

let setA = new Set([1, 2, 3, 4]);
let setB = new Set([3, 4, 5, 6]);

let intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection);

let union = new Set([...setA, ...setB]);
console.log(union);

let difference = new Set([...setA].filter(x => !setB.has(x)));
console.log(difference);