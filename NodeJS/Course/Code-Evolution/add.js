// first module - in node js each file is a module but is isolated by default
const add = (a, b) => {
  return a + b;
};
// const sum = add(1, 2);
// console.log(sum);


module.exports = add;