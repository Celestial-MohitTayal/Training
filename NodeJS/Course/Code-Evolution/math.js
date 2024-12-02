//Ways to import and export modules in nodejs

//--------------------------------------------------
// const add = (a, b) => {
//     return a + b;
// };
// module.exports = add;
//--------------------------------------------------
//Another way
// module.exports = (a, b) => {
//     return a + b;
// };
//--------------------------------------------------
// const add = (a, b) => {
//     return a + b;
// };
// const subtract = (a, b) => {
//     return a - b;
// };
// module.exports = {add, subtract, };
//--------------------------------------------------
module.exports.add = (a, b) => {
  return a + b;
};
module.exports.subtract = (a, b) => {
  return a - b;
};
//---------------------------------------------------
// exports.add = (a, b) => {
//   return a + b;
// };
// exports.subtract = (a, b) => {
//   return a - b;
// };
//----------------------------------------------------
//module.exports vs exports

// const add = (a, b) => {
//     return a + b;
// };
// const subtract = (a, b) => {
//     return a - b;
// };
// exports = {add, subtract, }; 
// This will throw error as module math will only export module.exports object not exports object(Take reference from object-reference.js file)
//----------------------------------------------------
