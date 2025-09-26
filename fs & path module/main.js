const fs = require("fs");
// const { console } = require("inspector");

// fs.writeFile("test.txt","This is created using file system in node",()=>{
//     console.log("File created")
// })
// fs.wri("test.txt",(eventType,filename)=>{
//     console.log(filename)
// })

// fs.open("test.txt", "a", (err, fd) => {
//     if (err) throw err
//     fs.write(fd, "changed\n", (err, written, str) => {
//         if (err) throw err;

//         console.log("File changed");

//         fs.readFile("test.txt", "utf8", (err, data) => {
//             if (err) throw err;
            
//             console.log(data)
            
//             fs.close(fd, () => {
//                 console.log("closed");
//             })

//         })

//     })
// })
// fs.writeFile("test1.txt","This is created using file system in node",()=>{
//     console.log("File created")
// })
// fs.readFile("test1.txt","utf-8",(err,data)=>{
//     if (err) throw err
//     console.log(data)
// })

const open = fs.openSync("test1.txt","a");

fs.appendFileSync(open,"Im using synchronous way");
console.log("content changed",open);

fs.close(open)

fs.writeFileSync("test1.txt","")
console.log("content erased")