// input: arr=['hello', 'how','are','you', 'today?']
// output:
// hello
// how
// are
// you
// today?
// empty array

function mutate(arr) {
  let n = arr.length;
  for (let i = 0; i <= n; i++) {
    if (arr.length > 0) {
      console.log(arr.shift());
    } else {
      console.log("Empty array!");
    }
  }
}

arr = ["hello", "how", "are", "you", "today?"];

mutate(arr);

//   --------------------------------------------------------------------------

// input: 'How are you today?'
// output: 'woH era uoy ?yadot'

function reverseWords(str) {
  let result = "";
  let word = "";

  for (let i = 0; i < str.length; i++) {
    word += str[i];

    if (str[i] == " " || i == str.length - 1) {
      let reversedWord = "";

      for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
      }

      result += reversedWord.toString() + " ";

      word = "";
    }
  }

  console.log(result);
}

reverseWords("How are you today?");


//-----------------------------------------------------

// input: 'arr= [1,2,3,[4,5,[6,7],8,9],10,11]'
// output: 'arr=[1,2,3,4,5,6,7,8,9,10,11]'



function reduceArray(arr) {
  let resArr = [];

  for(const item of arr){
    if(Array.isArray(item)){
      resArr = resArr.concat(reduceArray(item));
    } else{
      resArr.push(item);
    }
  }
  return resArr;
}

let array = [1, 2, 3, [4, 5, [6, 7], 8, 9], 10, 11];
let output1 = reduceArray(array);
console.log(output1);

