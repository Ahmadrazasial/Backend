const express = require('express')


const app = express()

const app1 = express();

const port = 3000

const path = require("path");

// import path from "path";
const { json } = require('stream/consumers');

console.log(__dirname)

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "new", "index.html"));
})

app.get('/', (req, res) => {
  res.send('This is Ahmad Raza')
})

app.get('/about', (req, res) => {
  res.send("This is about section");
  console.log(req)
})

// app.get('/blog/:topic', (req, res) => {
//   res.send(`THis is about ${req.params.topic}`);
// })
// app.get('/blog/:topic', (req, res) => {
//   res.send(`THis is about ${req.params.topic}`);
// })

const blogposts = {
  a: { title: "a post", content: "thois is about a" }
  , b: { title: "b post", content: "thois is about b in golden word unless u do it" },
  c: { title: "c post", content: "thois is about c" },
  d: { title: "d post", content: "thois is about d" }
}

app.get("/blog/:id",(req,res)=>{
  const id = req.params.id;
  const cont = blogposts[id];

  res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>${cont.title}</h1>
    <p>${cont.content}</p>
</body>
</html>
    `)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const port1 = 5000;

app1.get("/fruits/:name",(req,res)=>{

  const fs = require("fs")

  const file = fs.readFileSync("data.json","utf8");
  const filedata = JSON.parse(file);

  const name = req.params.name;

  const send = filedata.fruits[name];

 

res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  <table>
        <tr>
            <th>fruit:</th>
            <th>price:</th>
            <th>mass:</th>
        </tr>
        <tr>
            <td>${name}</td>
            <td>${send.price}</td>
            <td>${send.weight}</td>
        </tr>
    </table>
</body>
</html>`)


})


app1.listen(port1,()=>{
  console.log("running on 5000")
});
