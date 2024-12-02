// const data = require("./data.json");
// console.log(data);
// console.log(data.name);

//-----------------------------------------------------------
//Path - Module

// const path = require("node:path");
// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.parse(__filename));
// console.log(path.format(path.format(__filename))); //error idk

// console.log(path.isAbsolute(__filename));

//.join
// console.log(path.join("folder1", "folder2", "index.html"));
// console.log(path.join("/folder1", "folder2", "index.html"));
// console.log(path.join("folder1", "//folder2", "index.html"));
// console.log(path.join("folder1", "folder2", "../index.html"));
// console.log(path.join(__dirname, "data.json"));

//.resolve
// console.log(path.resolve("folder1", "folder2", "index.html"));
// console.log(path.resolve("/folder1", "folder2", "index.html"));
// console.log(path.resolve("/folder1", "//folder2", "index.html"));
// console.log(path.resolve("/folder1", "//folder2", "../index.html"));
// console.log(path.resolve(__dirname, "data.json"));

//-----------------------------------------------------------
// #Event - Module
// Event module is a built in module that allows us to work with events in node
//  the module returns a event emitter class which we can initiate to create an emitter object
// using the emitter object we can register event listeners using the on method and emit an event using the emit method
// the emit method accepts the event name followed by arguments that need to be passed on to the listeners
// when an event occurs node automatically calls the listeners for the corresponding events passing in the appropriate arguments
// events allow us to write code in non blocking manner

// const EventEmitter = require("node:events")
// const emitter = new EventEmitter()
// emitter.on("order-pizza", (size, toping) => {
//     console.log(`Order recieved! Baking a ${size} pizza with ${toping}`);
// })
// emitter.on("order-pizza", (size) => {
//     if(size === "large")
//     console.log(`Serving complimentary drink.`);
// })
// console.log("Do work before event occurs in the system");
// emitter.emit("order-pizza", "large", "mushroom")

//------
//Extending from eventEmitter
// const PizzaShop = require("./pizza-shop");
// const DrinkMachine = require("./drink-machine")
// const pizzaShop = new PizzaShop();
// const drinkMachine = new DrinkMachine();
// pizzaShop.on("order", (size, topping) => {
//   console.log(`Order recieved! Baking a ${size} pizza with ${topping}`);
//   drinkMachine.serveDrink(size);
// });
// pizzaShop.order("large", "mushroom");
// pizzaShop.displayOrderNumber();

//-----------------------------------------------------------
//fs - Module
// read a  file
// const fs = require("node:fs");
// //Synchronously
// console.log("First");
// const fileContents = fs.readFileSync("./file.txt", "utf-8"); // using utf-8 thows string, Suffix sync is very imp here because it shows that it is synchronous behaviour.
// console.log(fileContents);

// console.log("Second");

// //Asynchronously
// const abc = fs.readFile("./file.txt", "utf-8", (error, data) => {
//   //first error callback pattern
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// console.log("Third");
// //-------------
// //write a file
// //Synchronously
// fs.writeFileSync("./greet.txt", "Hello World!"); //greet.txt will be created with text hello world inside
// //Asynchronously
// fs.writeFile("./greet.txt", " HelloWorld!",{flag: "a"}, (error) => {    //flag: a -> will append the data present in txt file with the new data we add.
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File Written");
//   }
// });

//--------
//fs promise module

// const { read } = require("node:fs");
// const fs = require("node:fs/promises");

// console.log("First");
// fs.readFile("./file.txt", "utf-8")
//   .then((data) => console.log(data))
//   .then((error) => console.log(error));
// console.log("Second");

// console.log("First");
// async function readFile() {
//     try{
//         const data = await fs.readFile("./file.txt", "utf-8");
//         console.log(data);
//     }
//     catch(error) {
//         console.log(error);
//     }
// }
// readFile();
// console.log("Second");

//-----------------------------------------------------------
//Stream Recap using fs
//Types of Stream:
//Readable Stream - from which data can be read
//Writable Stream - from which we can write data
//Duplex Stream - that are both Readable and Writable
//Transform Stream - that can modify or transform the data as it is written and read

// const fs = require("node:fs")
// const readableStream = fs.createReadStream("./file.txt", {
//     encoding: "utf-8",
//     highWaterMark: 2,           //giving the size of 2 bytes -> now chunk will go in the form of 2 bytes
// })

// const writableStream = fs.createWriteStream("./file2.txt");

// readableStream.on("data", (chunk) => {
//     console.log(chunk);                 //He - ll - o  - Mo - hi - t
//     writableStream.write(chunk);
// })
//-----------------------------------------------------------
//Pipes - it returns the destination stream which enables chaining. but it happens only in readable transform and duplex streams

// const fs = require("node:fs");
// const zlib = require("node:zlib"); //zlib allows us to create zip file - it has built in transform stream

// const gzip = zlib.createGzip(); //transform stream

// const readableStream = fs.createReadStream("./file.txt", {
//   encoding: "utf-8",
//   highWaterMark: 2,
// });

// readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz")); //we are chaining with .pipe moving from readable stream to transform stream to writable stream

// const writableStream = fs.createWriteStream("./file2.txt");

// readableStream.pipe(writableStream);

//-----------------------------------------------------------
//HTTP and Node
//imported built in http module
//use createserver method to create server
//the method accepts a req listener callback which gets executed on every request
//node automatically injects the request and response arguments into the callback function
//the request object gives us information about the incoming request wheres as response object is used to send back reesponse to the client
//finally we specify that the created server should listen to incoming requests on port 3000

// const http = require("node:http");

// const server = http.createServer((req, res) => {
//   console.log(req);
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello World!");
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

//----------
//JSON Response

// const http = require("node:http");

// const server = http.createServer((req, res) => {
//   const superHero = {
//     firstName: "Bruce",
//     lastName: "Wayne",
//   }

//   res.writeHead(200, { "Content-Type": "application/json" });   //application/json
//   res.end(JSON.stringify(superHero));                           //JSON.stringify
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });
//----------
//HTML Response

// const http = require("node:http");

// const server = http.createServer((req, res) => {
//   const superHero = {
//     firstName: "Bruce",
//     lastName: "Wayne",
//   }

//   res.writeHead(200, { "Content-Type": "text/html" });   //text/html
//   res.end("<h1>Hello World!</h1>");                      //<h1></h1>
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });
//-------
//HTML Response with html file

// const http = require("node:http");
// const fs = require("node:fs");

// const server = http.createServer((req, res) => {
//   const superHero = {
//     firstName: "Bruce",
//     lastName: "Wayne",
//   };

//   res.writeHead(200, { "Content-Type": "text/html" });
//   const html = fs.readFileSync("./index.html", "utf-8");
//   res.end(html);
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });
//-------
//HTML Response with html file using pipes 

// const http = require("node:http");
// const fs = require("node:fs");

// const server = http.createServer((req, res) => {
//   const superHero = {
//     firstName: "Bruce",
//     lastName: "Wayne",
//   };

//   res.writeHead(200, { "Content-Type": "text/html" });
//   fs.createReadStream("./index.html").pipe(res)
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });
//-------
//HTML Response with html file (dynamic)

const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  const name = "Mohit"

  res.writeHead(200, { "Content-Type": "text/html" });
  let html = fs.readFileSync("./index.html", "utf-8");
  html = html.replace("{{name}}", name)
  res.end(html);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
//--------
//HTTP Routing
// const http = require("node:http");
// const fs = require("node:fs");

// const server = http.createServer((req, res) => {
//   //req.method GET POST PUT DELETE
//   if (req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Home Page");
//   } else if (req.url === "/about") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("About Page");
//   } else if (req.url === "/api") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(
//       JSON.stringify({
//         firstName: "Bruce",
//         lastName: "Wayne",
//       })
//     );
//   } else {
//     res.writeHead(404);
//     res.end("Page not found! :(");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

