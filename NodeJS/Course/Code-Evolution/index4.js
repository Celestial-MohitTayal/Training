//Microtask Queue

//Experiment 1
// console.log("CL 1");
// process.nextTick(() => {
//   console.log("Process.nextTick 1");
// });
// console.log("CL 2");
//All user written synchronous Javascript code takes priority over async code that the runtime would like to eventually execute
//------------------------------------------------------

//Experiment 2
// Promise.resolve().then(() => console.log("Promise.resolve"));
// process.nextTick(() => console.log("process.nextTick"));
//All callbacks in nextTick are executed before Promise.resolve
//-------------------------------------------------------
//Timer Queue

//Experiment 3
// setTimeout(() => console.log("setTimeout 1"));
// setTimeout(() => console.log("setTimeout 2"));
// setTimeout(() => console.log("setTimeout 3"));

// process.nextTick(() => console.log("process.nextTick 1"));
// process.nextTick(() => {
//   console.log("process.nextTick 2");
//   process.nextTick(() => console.log("process.nextTick Inside Process"));
// });
// process.nextTick(() => console.log("process.nextTick 3"));

// Promise.resolve().then(() => console.log("Promise.resolve 1"));
// Promise.resolve().then(() => {
//   console.log("Promise.resolve 2");
//   process.nextTick(() => console.log("process.nextTick Inside Promise"));
// });
// Promise.resolve().then(() => console.log("Promise.resolve 3"));
// Callbacks in the microtask queues are executed before callbacks in the timer queue.
//-------------------------------------------------------

//Experiment 4
// setTimeout(() => console.log("setTimeout 1"));
// setTimeout(() => {
//     console.log("setTimeout 2");
//     process.nextTick(() => console.log("process.nextTick Inside setTimeout"));
// });
// setTimeout(() => console.log("setTimeout 3"));

// process.nextTick(() => console.log("process.nextTick 1"));
// process.nextTick(() => {
//   console.log("process.nextTick 2");
//   process.nextTick(() => console.log("process.nextTick Inside Process"));
// });
// process.nextTick(() => console.log("process.nextTick 3"));

// Promise.resolve().then(() => console.log("Promise.resolve 1"));
// Promise.resolve().then(() => {
//   console.log("Promise.resolve 2");
//   process.nextTick(() => console.log("process.nextTick Inside Promise"));
// });
//-------------------------------------------------------
//Experiment 5
// setTimeout(() => console.log("setTimeout 1"), 1000);
// setTimeout(() => console.log("setTimeout 2"), 500);
// setTimeout(() => console.log("setTimeout 3"), 0);
//Timer queue callbaks are executed in FIFO order

//-------------------------------------------------------

//I/O Queue
//Experiment 6
// const fs = require("node:fs");
// fs.readFile(__filename, () => {
//   console.log("fs.readFile");
// });
// Promise.resolve().then(() => console.log("Promise.resolve"));
// process.nextTick(() => console.log("process.nextTick"));
//callback in the microtask queues are executed before callbacks in the I/O queue

//-------------------------------------------------------
//Experiment 7
// const fs = require("node:fs");
// setTimeout(() => console.log("SetTimeout"), 0);
// fs.readFile(__filename, () => {
//   console.log("fs.readFile");
// });
//When running setTimeout with delay 0ms and an I/O async method, the order of execution can never be guaranteed.

//-------------------------------------------------------
//Experiment 8
// const fs = require("node:fs");
// fs.readFile(__filename, () => {
//   console.log("fs.readFile");
// });

// Promise.resolve().then(() => console.log("Promise.resolve"));
// process.nextTick(() => console.log("process.nextTick"));
// setTimeout(() => console.log("setTimeout"), 0);

// for(let i = 0; i < 2000000; i++){}
//I/O queue callbacks are executed after Microtask queues callbacks and Timer queue callbacks.

//-------------------------------------------------------

//I/O Polling
//Experiment 9
// const fs = require("node:fs");
// fs.readFile(__filename, () => {
//   console.log("fs.readFile");
// });

// Promise.resolve().then(() => console.log("Promise.resolve"));
// process.nextTick(() => console.log("process.nextTick"));
// setTimeout(() => console.log("setTimeout"), 0);
// setImmediate(() => console.log("setImmediate"));
//I/O events are polled and callback functions are added to the I/O queue only after the I/O is complete

//-------------------------------------------------------

//Check Queue
//Experiment 10
// const fs = require("node:fs");
// fs.readFile(__filename, () => {
//   console.log("fs.readFile");
//   setImmediate(() =>
//     console.log("Inner setImmediate inside fs.readFile (i/o)")
//   );
// });

// Promise.resolve().then(() => console.log("Promise.resolve"));
// process.nextTick(() => console.log("process.nextTick"));
// setTimeout(() => console.log("setTimeout"), 0);
// for (let i = 0; i < 2000000; i++) {}

//Check queue callbacks are executed after Microtask Queues callback, Timer queue callbacks, and I/O callbacks are executed.

//-------------------------------------------------------
//Experiment 11
// const fs = require("node:fs");
// fs.readFile(__filename, () => {
//   console.log("fs.readFile");
//   setImmediate(() =>
//     console.log("Inner setImmediate inside fs.readFile (i/o)")
//   );
//   Promise.resolve().then(() => console.log("Inner Promise.resolve inside fs.readFile (i/o)"));
//   process.nextTick(() => console.log("Inner process.nextTick inside fs.readFile (i/o)"));
// });

// Promise.resolve().then(() => console.log("Promise.resolve"));
// process.nextTick(() => console.log("process.nextTick"));
// setTimeout(() => console.log("setTimeout"), 0);
// for (let i = 0; i < 2000000; i++) {}
//Microtasks Queue callbacks are executed after i/o callbacks and before check queue callbacks

//-------------------------------------------------------
//Experiment 12
// setImmediate(()=> console.log("setimmediate 1"))
// setImmediate(()=> {
//     console.log("setimmediate 2");
//     process.nextTick(() => console.log("inner process.nextTick"))
//     Promise.resolve().then(() => console.log("inner Promise.resolve()"))
// })
// setImmediate(()=> console.log("setimmediate 3"))
//Microtask callbacks are executed in between check queue callbacks.

//--------------------------------------------------------
//Experiment 13
// setTimeout(() => console.log("setTimeout"), 0);
// setImmediate(() => console.log("setImmediate"));
//when running setTimeout with delay of 0ms and setImmediate method, the order of execution can never be guruanteed.

//--------------------------------------------------------

//Close Queue
//Experiment 14
const fs = require("fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close", () => {
    console.log("This is from readableStream close event callback");
})

setImmediate(() => console.log("setImmediate"));
setTimeout(() => console.log("setTimeout"), 0);
Promise.resolve().then(() => console.log("Promise.resolve"));
process.nextTick(() => console.log("process.nextTick"));
//close queue callbacks are executed after all other queues callbacks in a given iteration of the event loop.

//--------------------------------------------------------

//Event Loop Summary
//The event lop is a C program that oechestrates or co-ordinates the execution of synchronous and asynchronous code in NodeJS
//It co ordinates the execution of callbacks in six different queues:-
//They are nextTick, Promise, Timer, I/O, Check and Close queues.
//We use process.nextTick() method to queue into the nextTick queue.
//We resolve or reject a Promise to queue into the Promise queue.
//We use setTimeout or setInterval to queue into the timer queue.
//Execute an async method to queue into the I/O queue.
//use setImmediate function to queue into the check queue and finally
//attach close event listener to queue into the close queue
//the order of execution follows the same order listed here.
//nextTick and Promise queues are executed in between each queue and also im between each callback execution in the timer and check queues.
