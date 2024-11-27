// const data = require("./data.json");
// console.log(data);
// console.log(data.name);

//-----------------------------------------------------------
//Path - Module 


const path = require("node:path");
// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.parse(__filename));
// console.log(path.format(path.format(__filename))); //error idk

// console.log(path.isAbsolute(__filename));

//.join
// console.log(path.join("folder1", "folder2", "index.html"));
// console.log(path.join("/folder1", "folder2", "index.html"));
// console.log(path.join("folder1", "//folder2", "index.html"));
// console.log(path.join("folder1", "folder2", "../index.html"));
// console.log(path.join(__dirname, "data.json"));

//.resolve
// console.log(path.resolve("folder1", "folder2", "index.html"));
// console.log(path.resolve("/folder1", "folder2", "index.html"));
// console.log(path.resolve("/folder1", "//folder2", "index.html"));
// console.log(path.resolve("/folder1", "//folder2", "../index.html"));
// console.log(path.resolve(__dirname, "data.json"));