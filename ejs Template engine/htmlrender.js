const express = require('express');
const fs = require('fs/promises');
const ejs = require('ejs');
const { delimiter } = require('path');
const path = require('path');
const app = express();
const port = 5000;

let options = {cache:true,rmWhitespace:true, delimiter:'$'}
app.engine('html',(filepath,data,cb)=>{
    ejs.renderFile(filepath,data,options,cb);
});

app.set('view engine' , 'html')
app.set('views',path.join(__dirname,'html'))
 app.get('/table/:slug',async(req,res)=>{
    let brand = req.params.slug.toLowerCase();
    
    let file = await fs.readFile('data.json','utf-8');
    let data = JSON.parse(file);
    let brandData = data[brand]

    if(!brandData){
        return res.status(404).send("Brand not found");
    }

    res.render('table',{brand,
        type:brandData.type,
        benfit:brandData.benefits,
        dis:brandData.Disadvantage
    },(err,html)=>{
        console.log("Table filled");
        res.send(html)
    })
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})