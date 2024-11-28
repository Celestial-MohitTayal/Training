//Callback Pattern in node

// function higherOrderFunction(callbackFn) {      
//     const name = "Mohit";
//     callbackFn(name);
// }
//higherOrderFunction(callbackFn);

// function greet(name) {
//     console.log(`${name}`);  //Mohit
// }

// function greetMohit(greetFn) {      
//     const name = "Mohit";
//     greetFn(name);
// }
// greetMohit(greet);

//------------------------------------------------------------
//Buffer, Stream, CharacterSet, Encoding

// const buffer = new Buffer.from("Mohit");
// buffer.write("Tayal")
// console.log(buffer.toString()); //Mohit / .write->Tayal  : buffers have limited memory so the five characters containing Mohit overrides and change to Tayal
// console.log(buffer);            //<Buffer 4d 6f 68 69 74>
// console.log(buffer.toJSON());   //{ type: 'Buffer', data: [ 77, 111, 104, 105, 116 ] }
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------