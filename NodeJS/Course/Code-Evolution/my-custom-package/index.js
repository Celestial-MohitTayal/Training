const upperCase = require("upper-case").upperCase


function greet(name) {
    console.log(upperCase(`Hello ${name}, Welcome to Codevolution!`));
}
greet('Mohit')

module.exports = greet; 