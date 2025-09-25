const fn = "Ahmad Raza";
const ln = "Sial"



let cricinfo = {
  subject : "Batsman",
  object: "Bowler",
  verb : "out"
}
const http = require("http");

const hostname = '127.0.0.1';
const port = '3000';

const server = http.createServer((req,res) =>{
  res.statusCode = '200';
  res.setHeader('Content-type', 'text/html');
  res.end("<h1>THis is server created using ecmaScript </h1>")
})

function minus(a,b){
return  (a - b) / 5 == -2

}

module.exports = {fn , ln , cricinfo, server, hostname , port , minus};


