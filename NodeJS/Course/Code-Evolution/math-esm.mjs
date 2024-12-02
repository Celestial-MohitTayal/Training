//ES Modules
//ESModules is the ECMAScript standard of modules
//it was introduced with es2015
//node.js 14 and above support es module
//instead of module.exports, we use the export keyword
//the export can be default or named
//we import the exported variables or functions using the import keyword
//if it is a default export, we can assign any name while importing
//if it is a named export, the import name must be the same


//------------------------------------------
// const add = (a, b) => {
//     return a + b;
// }
// export default add;

//------------------------------------------
// export default add = (a, b) => {
//     return a + b;
// }

//------------------------------------------
// const add = (a, b) => {
//     return a + b;
// };
// const subtract = (a, b) => {
//     return a - b;
// };

// export default {
//     add,
//     subtract
// }

//------------------------------------------
export const add = (a, b) => {
    return a + b;
};
export const subtract = (a, b) => {
    return a - b;
};
