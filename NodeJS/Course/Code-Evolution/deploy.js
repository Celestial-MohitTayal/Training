const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log(req);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World!");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("Server running on port 3000");
});