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

// const crypto = require("node:crypto");

// process.env.UV_THREADPOOL_SIZE = 5;
// const MAX_CALLS = 6;
// const start = Date.now();
// for(let i = 0; i < MAX_CALLS; i++){
// crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//     console.log(`Hash: ${i+1}`, Date.now() - start);
// });
// }

//by increasing the threadpool size we are able to improve the total time taken to run multiple calls of an asynchronous method like pbkdf2.
//-------------------------------------------------------------------
const https = require("node:https");

const MAX_CALLS = 4;

const start = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(`Request: ${i + 1}`, Date.now() - start);
      });
    })
    .end();
}

//Although botg crypto.pbkdf2 and https.request are asynchronous, https.request method does not seem to use the thread pool.
//https.request does not seem to be affected by the number of cpu cores either.

//LibUV and Async Methods Summary
// In Node.j, async methoda are handled by libuv
// They are handled in two different ways
    //1. Native async mechanism
    //2. Thread Pool
//Whenever possible, libuv will use native async mechanism in the OS so as to avoid blocking the main thread.
//Since this is part of the kernel, there is different mechanisn for each OS. We have epoll for Linux, Kqueue for MacOS and IO Completion Port on Windows.
//Relying on native async mechanisms makes node scalable as the only limitation is the operating system kernel
//example of this type is a network i/o opertion