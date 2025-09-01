// const { createServer } = require('node:http');

// const hostname = '127.0.0.0';
// const port = 3001;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('local server');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello, World!"));

app.listen(3000, () => console.log("Server running on port 3000"));
