let module1 = (function () {
  let privateVar = "I am private";

  return {
    publicMethod: function () {
      console.log("Accessing private var: " + privateVar);
    },
  };
})();

module1.publicMethod(); // Output: Accessing private var: I am private
// console.log(module.privateVar); // Error: privateVar is not accessible

function createClosures() {
  var arr = [];

  for (let i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }

  return arr;
}

const closures = createClosures();
closures[0](); // ?
closures[1](); // ?
closures[2](); // ?

function createClosures1() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    (function (i) {
      arr.push(function () {
        console.log(i);
      });
    })(i);
  }

  return arr;
}

const closures1 = createClosures1();
closures1[0]();
closures1[1]();
closures1[2]();
