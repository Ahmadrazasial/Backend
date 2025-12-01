
import mongoose from "mongoose";
import { date,file,mixed,union,obj ,car,friend} from './models/types.js';
import  fs  from "fs";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

await mongoose.connect('mongodb://localhost:27017/schematypes');
const dateToday = new Date(Date.now())
const birthday = new Date("2002-11-15")
const ageToday = Math.floor((dateToday.getTime() - birthday.getTime()) / (1000 * 3600 * 24 * 365))
console.log(dateToday, birthday, ageToday)



// await date.deleteMany({date:{$type:"string"}})

const dup = await date.aggregate([
    {
      $group:{
        _id:"$date",
        ids:{$push:"$_id"},
        count:{$sum:1}
      }
    },
    {
      $match:{count:{$gt:1}}
    }
  ])
  for (const item of dup) {
    item.ids.shift();
     await date.deleteMany({_id:{$in:item.ids}})
  }
// const ageData = date.create({ date: dateToday.toLocaleDateString(), birth: birthday.toLocaleDateString(), age: ageToday })
  
const get = date.find({}).cursor()
for await (const item of get) {
console.log(item.date)    
}
 get.forEach(element => {
  console.log(element)
});


// const imagebfr = fs.readFileSync("result.jpg")
// console.log(imagebfr);
// const bfrfiles = await file.create({
//   filename:"result.jpg",
//   filedata:imagebfr,

// }) 
// console.log(bfrfiles);

const bfrread = await file.findOne();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagepath = path.join(__dirname,'output.jpg')

 fs.writeFileSync(imagepath,bfrread.filedata);

 console.log(imagepath)


const app = express()
const port = 3000

// app.get('/:name',async(req,res)=>{

//  const profile =  await mixed.create({
//     name:req.params.name,
//     working:["teacher","developer"]

//   })
// res.send(req.params.name + "'s profile is created")
// })

app.get('/img', (req, res) => {
  
  res.set('Content-Type','image/jpeg');
  res.send(bfrread.filedata)
  console.log()
})

app.get('/image', (req, res) => {
  
res.sendFile(imagepath);

})

app.get('/u', async(req, res) => {
  
await union.create({
  values:15
})

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// const car = new car();
car.driver = new mongoose.Types.ObjectId();

console.log(typeof car.driver)
// console.log(car.driver.toString());


// await friend.updateMany({},{$unset:{name:""}})

// await obj.create({
//   bestFriend:"692d80e5cb74fb11915ada45",
// })

// await obj.deleteMany();

const besti = await obj.find().populate('bestFriend')
console.log(besti)

for (const best of besti) {
  console.log(best.bestFriend._id)
}