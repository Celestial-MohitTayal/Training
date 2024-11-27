const math = require('./math')

const {add, subtract} = math // destructuring so that we do not hve to use math.add math.subtract

console.log(add(2, 3));
console.log(subtract(2, 3));