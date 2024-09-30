function Person(fName, lName) {                 //constructor function
    this.firstName = fName;
    this.lastName = lName;
}

const person1 = new Person("Mohit","Tayal");
const person2 = new Person("Tayal","Mohit");

Person.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
};

console.log(person1.getFullName());   //-> Mohit Tayal
console.log(person2.getFullName());   //-> Tayal Mohit


// Prototype Inheritence 

function superHero(fName, lName) {
    // this = {}
    Person.call(this, fName, lName);   //inheriting object parameters
    this.isSuperHero = true;
}

superHero.prototype.fightCrime = function () {
    console.log('Fighting Crime');
}

superHero.prototype = Object.create(Person.prototype);   // inheriting prototype

const batman = new superHero("Baibhav", "Saxena");

superHero.prototype.constructor = superHero;

console.log(batman.getFullName());  // -> Baibhav Saxena

