const obj = {
    name: 'Mohit',
    age: 25,
    'key-three': true,
    sayMyName: function() {
        console.log(this.name);
    }
};

console.log(obj);
console.log(obj.name);
console.log(obj['age']);
console.log(obj['key-three']);          //this is not possible with dot notation because of - in between.

obj.hobby = 'Cricket';                  //adding a key value pair in object

console.log(obj);

delete obj.hobby;                       //deleting a key value pair in obj

console.log(obj);

obj.sayMyName();                        //calling the function exists inside the object

let keys = Object.keys(obj);
console.log(keys);

let value = Object.values(obj);
console.log(value);

let entries = Object.entries(obj);
console.log(entries);

let target = {};
Object.assign(target, obj);
console.log(target);

Object.freeze(obj);
Object.seal(obj);

let parent = {role: 'admin'};
let child = Object.create(parent);
console.log(child.role);


let cloned = Object.assign({}, obj);
console.log(cloned);