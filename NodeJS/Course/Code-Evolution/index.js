console.log('Hello from index.js');  // node index / node index.js
//---------------------------------------------------------------------

const addFn = require('./add')   //require function loads the add module in index.js
const sum = addFn(1, 2)
const sum2 = addFn(2, 3)
console.log(sum, sum2);
//---------------------------------------------------------------------
//each module in nodejs have its own scope
require("./batman")
require("./superman")
//---------------------------------------------------------------------
// const superHero = require('./super-hero');
// console.log(superHero.getName());
// superHero.setName('Superman');
// console.log(superHero.getName());

// const newSuperHero = require('./super-hero');
// console.log(newSuperHero.getName());  //output: Superman instead of batman -> that is where concept of module caching come into picture.
//it is going to load same object as it is called before too, Caching helps in performance.
//---------------------------------------------------------------------

// to get over above scenario
const superHero1 = require('./super-hero');
const batman = new superHero1('Batman');
console.log(batman.getName());
batman.setName("Bruce Wayn");
console.log(batman.getName());

const superman = new superHero1("Superman");
console.log(superman.getName());