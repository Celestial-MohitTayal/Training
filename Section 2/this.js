//this keyword -> Four determination

//1. Implicit Binding
const person = {
    name: 'Mohit',
    sayMyName: function () {
        console.log(`My name is ${this.name}`);
    },
};

person.sayMyName();

//2. Explicit Binding
function sayMyName(){
    console.log(`My name is ${this.name}`)
}

sayMyName.call(person);

//3. New Binding
function Person(name) {
    //this = {};   -> Here this will work as object and person will work as constructor function
    this.name = name;
}

const p1 = new Person('Mohit'); 
const p2 = new Person('Tayal'); 

console.log(p1.name, p2.name); // undefined undefined

//4. Default Binding
sayMyName();   // -> My name is undefined

globalThis.name = "Mohit Tayal";

sayMyName();    //-> My name is Mohit Tayal  -> Default binding look for global scope.