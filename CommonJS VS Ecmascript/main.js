// import { fn ,ln } from "./ecmascript.js";
// console.log(fn, ln);

// import details from "./ecmascript.js"
// console.log(`${details.object} bowls to ${details.verb} the ${details.subject}`);

// import {server , hostname , port }from "./ecmascript.js"

// server.listen(port,hostname, ()=>{
//     // console.log("Server is starting");
//      const addr = server.address();
//     console.log(`http://${addr.address}:${addr.port}`);
// })

// // server.on("listening",()=>{
// //     const addr = server.address();
// //     console.log(`http://${addr.address}:${addr.port}`);
// // })

// import { multiply } from "./ecmascript.js";

// console.log(multiply(5))

const {fn , ln , cricinfo} = require("./commonjs.js");
console.log(`My name is ${fn} ${ln}`)

console.log(`${cricinfo.object} bowls to ${cricinfo.verb} the ${cricinfo.subject}`)