const express = require('express');
const app = express();
const fs = require('fs/promises')
const port = 3000;


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))


app.post('/api/user', async (req, res) => {

    const {name , age} = req.body;
    
     res.send(`The name is ${name} and age is ${age}`);

    console.log((`The name is ${name} and age is ${age}`))


    const data = `The name is ${name} and age is ${age}`;

    // fs.appendFile('./public/index.html',data);
    fs.appendFile('data.txt',data)
})


// app.use(express.static('public'))
app.post('/api/form',(req,res)=>{
    const {name , age} = req.body;
    res.send(`My name is ${name} and im ${age} years old.`)
    fs.appendFile('data.txt',`Form data recieved`)
})


app.get('/index.html',(req,res)=>{
    res.sendFile('/public/index.html',{root:__dirname});
})
app.listen(port, () => {
    console.log(`Server running oon port ${port}`)
})

//express.urlencoded

// const app1 = express();
// const porta = 5000;





// app1.listen(porta,()=>{
//     console.log("Server running on 5000")
// })