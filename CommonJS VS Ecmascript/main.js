const{ server,divide} = require('./commonjs.js');

server.on("listening",()=>{
    const addr = server.address();
console.log(`http://${addr.address}:${addr.port}/`)    
})

// const divide = require('./commonjs.js');
console.log(divide(15,5))

//ecmascript exports
// import { name,last } from "./ecmascript.js";
// console.log( name , last)

// import obj  from "./ecmascript.js";
// // console.log(obj.a ,obj.b, obj.c)

// // import server  from "./ecmascript.js";
// // server.on("listening",()=>{
// // const addr = server.address();
// // console.log(`http://${addr.address}:${addr.port}/`)  
// // })

// import add from "./ecmascript.js";

// console.log(add(5,3))



