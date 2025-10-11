const express = require('express')


const app = express()

const app1 = express();

const port = 3000

const path = require("path");


// import path from "path";
const { json } = require('stream/consumers');

console.log(__dirname)

app.get("/index", (req, res) => {
  // res.sendFile(path.join(__dirname, "new", "index.html"));
  res.sendFile("new/index.html",{root:__dirname});
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

app.get("/blog/:id", (req, res) => {
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

app1.get("/fruits/:name", (req, res) => {

  const fs = require("fs")

  const file = fs.readFileSync("data.json", "utf8");
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



const products = [
  { product: "phone", price: 1500, color: "white", display: "SuperAmoled" },
  { product: "Television", price: 1000, color: "navy blue", display: "LED" },
  { product: "Laptop", price: 2500, color: "light gold", display: "Lcd paper display" }
]

app1.get("/ele/:name", (req, res) => {
  const name = req.params.name;
  const data = products.find(item => item.product.toLowerCase() === name.toLowerCase());

  const { price, color, display } = req.query;

  // price = data.price;
  // color = data.color;
  // display = data.display;
  if (color) {
    res.send(`You have ordered a ${req.params.name} with ${data.color} color & display is ${data.display}.`)
  }


  res.json(data)
})


const phones = {
  samsung: { color: ["black", "lightgreen", "navyblue"], memory: ["6gb", "8gb"], storage: ["128gb", "256gb"] },
  apple: { color: ["black", "Red", "offwhite"], memory: ["4gb", "6gb"], storage: ["512gb", "256gb"] },
  Oneplus: { color: ["black", "yellow", "blue"], memory: ["4gb", "8gb"], storage: ["128gb", "256gb"] }
}

app1.get("/phone/:brand", (req, res) => {
  const { color, memory, storage } = req.query;

  const brandvar = req.params.brand;

  const brand = phones[brandvar];

  const result = {};

  if (!brand) {
    return res.status(404).send("not found");
  }

  if(!color && !memory && !storage){
    return res.json(brand);
  }
  
  if(color){
    const match = brand.color.filter(c => c.toLowerCase() === color.toLowerCase())
   result.color = match.length ? match : "color is not available";
  }

  if(memory){
    const match = brand.memory.filter(m => m.toLowerCase() === memory.toLowerCase())
   result.memory = match.length ? match : `No memory match for ${memory}`;
  }

 if(storage){
    const match = brand.storage.filter(s => s.toLowerCase() === storage.toLowerCase())
   result.storage = match.length ? match : `No memory match for ${storage}`;
  }

  res.send( `You have ordered a ${req.params.brand} phone with following specifications:
    <table>
    <thead>
    <tr>
    <th>Color  </th>
    <th>Memory </th>
    <th>Storage </th>
    </tr>
    </thead>
    <tr>
    <td>${result.color && result.color.length ? result.color : `${brand.color[0]}`}</td>
    <td>${result.memory && result.memory.length ? result.memory : `${brand.memory[0]}`}</td>
    <td>${result.storage && result.storage.length ? result.storage : `${brand.storage[0]}`}</td>
    </tr>
    
    </table>`
  )
})




app1.listen(port1, () => {
  console.log("running on 5000")
});



