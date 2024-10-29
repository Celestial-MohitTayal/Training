//write js func to return reverse of a number
function revNum(num) {
  return Number(num.toString().split("").reverse().join(""));
}

console.log(revNum(1234));
//OR
function revNum(num) {
  let rev = 0;

  while (num > 0) {
    var rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev;
}

console.log(revNum(5678));



//check whether string is palindrom or not
function strPalChecker(str) {
  let revStr = str.split("").reverse().join("");
  return revStr === str;
}

console.log(strPalChecker("poop"));
console.log(strPalChecker("loop"));



//write a js func that returns a passed str with lettersin alphabetical order.
function alphabeticalStr(str) {
  return str.split("").sort().join("");
}

console.log(alphabeticalStr("apple"));



//write a function to convert first letter of each word in a string to upper case
function captalizeStr(str) {
  let allWord = str.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.substr(1);
  });
  return allWord.join(" ");
}

console.log(captalizeStr("mohit tayal"));



//write a js func to get the number of occurences of each letter in specified string
function occ(str) {
    var occurences = {}

    str.split('').forEach(element => {
        if(occurences.hasOwnProperty(element)) occurences[element]++;
        else occurences[element] = 1;
    });
    return occurences;
}

console.log(occ('Apple'));


