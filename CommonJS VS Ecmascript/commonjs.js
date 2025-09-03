const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>This server is working via commonjs</h1>');
});

server.listen(port, hostname, () => {
  console.log( "u will get link");
});
// module.exports = server;

function divide(a,b) {
    return a / b; 
}
module.exports = {
    server,divide
}