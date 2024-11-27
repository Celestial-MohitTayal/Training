const fs = require("fs");
const { request } = require("http");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form></body>'
    );
    res.write("<html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      // console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      //   fs.writeFileSync("message.txt", message);
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  // process.exit();    -> closes the program, and stops event loop
  res.setHeader("Content-Type", "text/html"); // sending response by creating header and write
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my node.js server!</h1></body>");
  res.write("<html>");
  res.end();
};

// module.exports = requestHandler;
// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard code text'
// }

// module.exports.handler = requestHandler;
// module.exports.someText = 'some Hard Coded Text';

exports.handler = requestHandler;
exports.someText = "some Hard Coded Text";
