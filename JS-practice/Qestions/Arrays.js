//write function to clone an array
function cloneArr(arr) {
  return [...arr];
}

var newArr = cloneArr([1, 2, 3, 4]);

console.log(newArr);
//OR
function cloneArr(arr) {
  let newArr = [];
  arr.forEach((element) => {
    newArr.push(element);
  });
  return newArr;
}

console.log(cloneArr([4, 3, 2, 1]));
//OR
function cloneArr(arr) {
  let newArr = arr.map((ele) => ele);
  return newArr;
}

console.log(cloneArr([5, 6, 7, 8]));

//write a func to retrieve the parameter n elements from an array from starting
function retrieve(arr, n) {
  if (n <= arr.length) {
    for (let i = 0; i < n; i++) {
      console.log(arr[i]);
    }
  } else {
    console.log("Not Possible!");
  }
}

retrieve([1, 2, 3, 4, 5], 3);

//write a js program to find most frequent item of an array.
function freq(arr) {
  let freqency = {};

  arr.forEach((e) => {
    if (freqency.hasOwnProperty(e)) freqency[e]++;
    else freqency[e] = 1;
  });

  var ans = Object.keys(freqency).reduce((acc, num) => {
    return freqency[acc] > freqency[num] ? acc : num;
  });

  return ans;
}

console.log(freq([1, 2, 3, 4, 3, 2, 1, 3, 4, 3]));

//write a js program to shuffle an array
function shuffle(arr) {
  let totalShuffleArea = arr.length;

  while (totalShuffleArea > 0) {
    totalShuffleArea--;
    let indexToBeExchanged = Math.floor(Math.random() * totalShuffleArea);

    var temp = arr[totalShuffleArea];
    arr[totalShuffleArea] = arr[indexToBeExchanged];
    arr[indexToBeExchanged] = temp;
  }
  return arr;
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8]));
