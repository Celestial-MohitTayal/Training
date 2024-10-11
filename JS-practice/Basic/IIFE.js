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
