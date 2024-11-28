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

const { read } = require("node:fs");
const fs = require("node:fs/promises");

// console.log("First");
// fs.readFile("./file.txt", "utf-8")
//   .then((data) => console.log(data))
//   .then((error) => console.log(error));
// console.log("Second");

console.log("First");
async function readFile() {
    try{
        const data = await fs.readFile("./file.txt", "utf-8");
        console.log(data);
    }
    catch(error) {
        console.log(error);
    }
}
readFile();
console.log("Second");

//-----------------------------------------------------------
//-----------------------------------------------------------
//-----------------------------------------------------------
//-----------------------------------------------------------
