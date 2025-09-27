// import { error } from "console";
import fs from "fs/promises";
// import { console } from "inspector";

// fs.writeFile("test.txt","Yes im learning fs in node js");


// console.log(read.toString())
// let append = await fs.appendFile("test.txt","\nThis is happening")

let read = await fs.readFile("test.txt")
let newdata = "Repalcing the line";


console.log(read.toString());

const updated = read.toString().replace("This is happening",`${newdata}\nThis is happening`);
 await fs.writeFile("test.txt",updated,(err)=>{
    if (err) {
        throw err
    }else{
    console.log("data added in file")
    }
})
// console.log(write)


let content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script type="module" src="ecmascript.js"></script>
    <script type="module" src="main.js"></script>
</body>
</html>`;

let file = await fs.writeFile("index.html",content);
let readf = await fs.readFile("index.html","utf-8")
console.log(readf.toString());

const line = `<p>This is new line added using </p>`;

const add = readf.toString().replace('<body>',`<body>\n${line}`);

const writef = await fs.writeFile("index.html",add);

fs.appendFile("index.html",line)


let fd = await fs.open("tests.txt","a+");
console.log(fd.fd)

let readd = await fs.readFile(fd);

console.log(readd.toString())

let a = await fd.appendFile("\nSubmerge");
await fd.close()
