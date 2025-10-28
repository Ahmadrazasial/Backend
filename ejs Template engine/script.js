const express = require('express');
const fs = require('fs/promises');
const app = express();
const port = 3000;

app.set('view engine' , 'ejs')

let menudata = ["namaz","quran","memorization"];

let obj = {
    "1st":"Home",
    "2nd":"blog",
    "3rd":"about"
}

app.get('/',(req,res)=>{
    let SiteName = 'TestEngine';
    let placeholder = "Search now";
    res.render('index',{name:SiteName,replace:placeholder,menudata:menudata,links:obj});
})

app.get('/blog/:slug',async(req,res)=>{
    let brand = req.params.slug.toLowerCase();
    
    let file = await fs.readFile('data.json','utf-8');
    let data = JSON.parse(file);
    let brandData = data[brand]

    if(!brandData){
        return res.status(404).send("Brand not found");
    }

    res.render('blog',{brand,
        type:brandData.type,
        benfit:brandData.benefits,
        dis:brandData.Disadvantage
    });
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})