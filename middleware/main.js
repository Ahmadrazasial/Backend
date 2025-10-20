const express = require('express');
const app = express();
const app1 = express();
const port = 3000;
const port1 = 5000;

const myLogger = function (req, res, next) {
    req.startTime = Date.now();
    console.log(req.startTime)
  next()
}

app.use(myLogger);
app.get('/',(req,res)=>{
    res.send("Hello World!");
    const resTime = (Date.now() - req.startTime)/1000;
    console.log(`responded in ${resTime}`)
})
app.get("/slow",(req,res)=>{
    setTimeout(() => {
        // res.send("This is slow response");
        res.status(401)
    }, 2000);
})
app1.use((req,res,next) => {
    req.startTime = Date.now();
    res.on("finish",()=>{
        const total = (Date.now() - req.startTime)/1000;
        console.log(`Time taken to respond ${total}`);
    })
    next();
})

app1.get('/',(req,res)=>{
    res.send("This is home page")
})
app1.get('/blog',(req,res)=>{
    res.send("This is blog page")
})
app1.get('/blog/:slug',(req,res)=>{
    const name = req.params.slug.toLowerCase();
    res.send(`This is ${name} post`)
})
const birds = require('./routes');
app1.use('/birds',birds)
app1.listen(port1,()=>{
    console.log(`Server is running on ${port1}`);
})
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})

