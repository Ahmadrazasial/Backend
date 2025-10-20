const express = require('express');
const app = express();
const port = 3000;


app.use(express.json())
app.use(express.static('public'))


app.post('/api/user', async (req, res) => {

    const {name,age} = req.body;
    
    res.send(`The name is ${name} and age is ${age}`);
    console.log((`The name is ${name} and age is ${age}`))

})

app.listen(port, () => {
    console.log(`Server running oon port ${port}`)
})