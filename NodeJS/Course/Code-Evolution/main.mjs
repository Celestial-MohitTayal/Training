//ES Modules


// import add from './math-esm.mjs'
// console.log(add(5,5));
//---------------------------------------
// import math from "./math-esm.mjs"

// console.log(math.add(5, 5));
// console.log(math.subtract(5, 5));
//---------------------------------------
// import math from "./math-esm.mjs"
// const {add, subtract} = math;
// console.log(add(5, 5));
// console.log(subtract(5, 5));
//---------------------------------------
// import * as math from "./math-esm.mjs"
// const {add, subtract} = math;
import {add, subtract} from "./math-esm.mjs"
console.log(add(5, 5));
console.log(subtract(5, 5));