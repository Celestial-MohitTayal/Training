//module.exports vs exports

//-----------------------------------------------
// const obj1 = {
//     name: "Bruce Wayne",
// };
// const obj2 = obj1;
// obj2.name = 'Clark Kent';   // .name is assigned to same memory hence obj1.name will also change due to the reference
// console.log(obj1);  // { name: 'Clark Kent' }

//------------------------------------------------

const obj1 = {
  name: "Bruce Wayne",
};
let obj2 = obj1;
obj2 = {                    // assigning an object literal will break the obj2 reference to obj1
  name: "Clark Kent",
};
console.log(obj1); // { name: 'Bruce Wayne' }



// here now obj1 refers to module.exports and obj2 refers to only exports.
