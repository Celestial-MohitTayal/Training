//(lib-uv)THREAD-POOL

// const fs = require("node:fs")

// console.log("First");

// fs.readFile("./file.txt", "utf-8",(err, data) => {
//     console.log("File Contents");
// })

// console.log("Last");

//--------
//Synchronous
// const crypto = require("node:crypto");
// const start = Date.now();
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// console.log("Hash:", Date.now() - start);

//-----
//Asynchronous
// const crypto = require("node:crypto");
// const MAX_CALLS = 5;
// const start = Date.now();
// for(let i = 0; i < MAX_CALLS; i++){
// crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//     console.log(`Hash: ${i+1}`, Date.now() - start);
// });
// }

//libuv's thread pool has size of 4 threads

//-----
//increasing threadpool size

const crypto = require("node:crypto");

process.env.UV_THREADPOOL_SIZE = 5;
const MAX_CALLS = 6;
const start = Date.now();
for(let i = 0; i < MAX_CALLS; i++){
crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`Hash: ${i+1}`, Date.now() - start);
});
}

//by increasing the threadpool size we are able to improve the total time taken to run multiple calls of an asynchronous method like pbkdf2.
