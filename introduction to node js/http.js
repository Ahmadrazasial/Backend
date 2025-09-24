const  {createServer}  = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<h1>Local server</h1>
    <p>This is the locval server created using node js http module</p>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => res.send("Hello, World!"));

// app.listen(3000, () => console.log("Server running on port 3000"));
