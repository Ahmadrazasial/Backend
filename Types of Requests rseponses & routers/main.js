const express = require('express')
const blog = require('./routes/blog')
const app = express()
const port = 3000
app.use(express.static(__dirname))

// app.get('/index', (req, res) => {
//   res.sendFile("/index.html",{root:__dirname})
// })


app.post("/index",(req,res)=>{
    console.log("Post request sent");
    res.send("Its post request");
})
app.put("/p",(req,res)=>{
    console.log("Put request sent");
    res.send("Its put request");
})
// app.delete("/d",(req,res)=>{
//     console.log("Delete request sent");
//     res.send("Its delete request");
// })
app.get("/home",(req,res)=>{
    res.sendFile("/index.html",{root:__dirname})
})

const fs = require("fs/promises");
app.get("/intro",async(req,res)=>{
    
    const data = await fs.readFile("data.json","utf8")
    res.json(JSON.parse(data))

}).get("/intro/:ask",async(req,res)=>{
    let ask = req.params.ask.toLowerCase();;
    let data = await fs.readFile("data.json","utf8");
    const parsed = JSON.parse(data)
    const ans = parsed.Intro[ask];
    res.send(ans)
})

app.use("/blog",blog);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



