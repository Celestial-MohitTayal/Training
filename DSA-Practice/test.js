// function countDuplicates() {
//     const countMap = {};
//     arr.forEach(num => {
//         countMap[num] = (countMap[num] || 0) + 1;
//     });

//     for (const num in countMap) {
//         if (countMap[num] > 1) {
//             console.log(`${num} repeats ${countMap[num]} times`);
//         }
//     }
// }
// let arr = [1,2,3,4,5,6,7,1,2,3,4,5,6]
// countDuplicates(arr)

//---------------------------------------------------------------------
//checking the knowledge of lexical scope

// let flag = true;
// const fun = function () {
//   if (flag) {
//     console.log("Called");
//     flag = false;
//   }
// };
// fun();
// fun();
// fun();

//------------------
function outerfn() {
  let flag = true;
  return function innerFn() {
    if (flag) {
      console.log("called");
      flag = false;
    }
  };
}

const a = outerfn();

a();
a();
outerfn();
outerfn();
