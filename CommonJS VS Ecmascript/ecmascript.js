//named export

export const fn = "Ahmad";
export const ln = "Raza";

let cricinfo = {
  subject : "Batsman",
  object: "Bowler",
  verb : "out"
}
export default cricinfo

import http from "http";

const hostname = '127.0.0.1';
const port = '3000';

const server = http.createServer((req,res) =>{
  res.statusCode = '200';
  res.setHeader('Content-type', 'text/html');
  res.end("<h1>THis is server created using ecmaScript </h1>")
})


export { server, hostname, port};
let table = [];
 export function multiply(a){
  for(let i = 1 ; i <= 10 ; i++){
    table.push ( i * a)
  }
  return table;
 }