export const name = "Ahmad";
export const last = "Raza";


const obj = {
    a:"Ahmad",
    b:"Raza",
    c:"Sial"
}
// export default obj;

import  { createServer }  from "http"

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
// export default server;

function add(a,b) {
    return a + b; 
}

// export default add;

function multiply(x){
  const table = []
  for(let i = 1 ; i <= 10 ; i++){
    table.push( i * x)
  }
  return table
}

export default multiply