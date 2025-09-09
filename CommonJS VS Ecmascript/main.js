const{ server,divide,multiply} = require('./commonjs.js');

server.on("listening",()=>{
    const addr = server.address();
console.log(`http://${addr.address}:${addr.port}/`)    
})

console.log(divide(625 ,25))
console.log(multiply(15),__dirname,__filename)
// ecmascript exports
// import { name,last } from "./ecmascript.js";
// console.log( name , last)

// import obj  from "./ecmascript.js";
// console.log(obj.a ,obj.b, obj.c)

// import server  from "./ecmascript.js";
// server.on("listening",()=>{
// const addr = server.address();
// console.log(`http://${addr.address}:${addr.port}/`)  
// })

// import add from "./ecmascript.js";

// console.log(add(5,3))


//  import table from "./ecmascript.js";
//  console.log(table(25))



