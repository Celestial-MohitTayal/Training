(function(){
    const superHero = 'Batman';
    console.log(superHero);
})();

(function(){
    const superHero = 'Superman';
    console.log(superHero);
})();
//---------------------------------------------------------


//with iife's functions get their own scope -> node js follows same pattern in module scope

// (function(){
//     Module code actually lives in here
// })()

//before a module code is executed, node.js will wrap it with a function wrapper that provides module scope
//this saves us from having to worry about conflicting variables or functions
//there us proper encapsulation and reusability is unaffected

//---------------------------------------------------------
(function(message){
    const superHero = 'Batman';
    console.log(message, superHero);
})("Hello");

(function(message){
    const superHero = 'Superman';
    console.log(message, superHero);
})("Hey");
//---------------------------------------------------------


//Module Wrapper contd.
(function(exports, require, module, __filename, __dirname) {  // 5 parameters which are pretty important for the functioning of the module
    const superHero = 'Batman';
    console.log(superHero);
})()
//---------------------------------------------------------