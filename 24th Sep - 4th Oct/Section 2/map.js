const map = new Map([
  ["a", 1],
  ["b", 2],
]);

// To create map we use map constructor
// The constructor optinally accepts array as an argument
// Array should contain arrays of length 2 as elements
// Here a&b are key and 1&2 are corresponding values

map.set("c", 3); //to add the key value in map we use set method
map.delete("b"); //to delete the value in mao we use delete method

console.log(map.has("a")); //to check whether map contain following data we use has method
console.log(map.size); //to check the size of mp we use size method

for (const [key, value] of map) {
  //Iterating over map
  console.log(`${key}: ${value}`);
}

console.log(map.get("a"));

map.clear(); //to delete all the values we use clear method

// UseCase1: Storing metadtaa for object

let user1 = { name: "John" };
let user2 = { name: "Jane" };

let userMeta = new Map();
userMeta.set(user1, { role: "admin", isActive: true });
userMeta.set(user2, { role: "user", isActive: false });

console.log(userMeta.get(user1));



//useCase2: Counting Frequency of Elements

const countWords = (text) => {
    let wordMap = new Map();
    let words = text.split(' ');

    for (let word of words) {
        word = word.toLowerCase();
        if (wordMap.has(word)) {
        wordMap.set(word, wordMap.get(word) + 1);
        } else {
        wordMap.set(word, 1);
        }
    }
    return wordMap;
}

console.log(countWords('hello Hello world world world'));