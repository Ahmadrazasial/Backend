const { error } = require("console");
const fs = require("fs");

// console.log(fs)

fs.writeFileSync("harry.txt", `<h3>This is index file</h3>`)
fs.writeFileSync("harry.txt", "This is updated")

// fs.writeFile("index.html","This is header", ()=>{
//     console.log("created")
// })

// fs.appendFile("index.html",`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <script type="module" src="ecmascript.js"></script>
//     <script type="module" src="main.js"></script>
// </body>
// </html>`,()=>{
//     console.log("data added")
// })

// fs.writeFile("index.html",`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
// <h1>This is some heading</h1>
// </body>
// </html>`,()=>{
//     fs.readFile("index.html" ,(error,data)=>{
//         console.log(data.toString())
//     })
// })

// fs.appendFile("index.html",`<p>This file i created using fs ystem in node</p>`,()=>{
//     console.log("updated")
// })
const newContent = `Yes i have added it`;
fs.readFile("index.html", "utf8" , (err, data)=>{
    if(err){
        console.error(err)
    return
    }
    const updated = data.replace("</body>", `${newContent}\n</body>`)

    fs.writeFile("index.html", updated , (err)=>{
        if(err){
            console.error(err)
            return
        }
        console.log(err)
    })
})