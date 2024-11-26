//-------------Core modules-------------
//http -> Launch a server, send requests
//https -> Launch a SSL server
// fs, path, os

const http = require("http"); //require - The way you import files/core_modules in nodejs

const routes = require('./routes')

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);
