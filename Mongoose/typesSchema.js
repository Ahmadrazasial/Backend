
import mongoose ,{Schema} from "mongoose";
import { date, file, mixed, union, obj, car, friend, arr, nbr, decimal, bigInt, marks,schema,uuid ,book} from './models/types.js';
import fs from "fs";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";


await mongoose.connect('mongodb://localhost:27017/schematypes');
const dateToday = new Date(Date.now())
const birthday = new Date("2002-11-15")
const ageToday = Math.floor((dateToday.getTime() - birthday.getTime()) / (1000 * 3600 * 24 * 365))
console.log(dateToday, birthday, ageToday)



// await date.deleteMany({date:{$type:"string"}})

const dup = await date.aggregate([
  {
    $group: {
      _id: "$date",
      ids: { $push: "$_id" },
      count: { $sum: 1 }
    }
  },
  {
    $match: { count: { $gt: 1 } }
  }
])
for (const item of dup) {
  item.ids.shift();
  await date.deleteMany({ _id: { $in: item.ids } })
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

const imagepath = path.join(__dirname, 'output.jpg')

fs.writeFileSync(imagepath, bfrread.filedata);

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

  res.set('Content-Type', 'image/jpeg');
  res.send(bfrread.filedata)
  console.log()
})

app.get('/image', (req, res) => {

  res.sendFile(imagepath);

})

app.get('/u', async (req, res) => {

  await union.create({
    values: 15
  })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// const car = new car();
car.driver = new mongoose.Types.ObjectId();

// console.log(typeof car.driver)
// console.log(car.driver.toString());


// const frndname =  await friend.create({name:"Abdullah"});

// await obj.create({
//   bestFriend:"692d80e5cb74fb11915ada45",
// })

// await obj.deleteMany();

const besti = await obj.find().populate('bestFriend')
console.log(besti)

// for (const best of besti) {
//   console.log(best.bestFriend._id)
// }

// await arr.create({
//   name:["Ahmad","Mitho","Hafeez"],
//   frnd:[{name:"Abdullah"},{name:"Ahmad"},{name:"Lali"}]
// })

const arrfind = await arr.find().sort({ _id: -1 }).limit(1);
// console.log(arrfind)

arrfind.forEach(array => {
  const name = array.name;
  const fnd = array.frnd;
  console.log(fnd)
  console.log(`${name[0]} is friend of ${fnd[0].name}`)
})


// await nbr.create({
//   price:20
// })

// await decimal.create({
//   // price: mongoose.Types.Decimal128.fromString('19.245')
// })

const price = (await decimal.find().skip(1).limit(1));
console.log(price)

price.forEach(e => {
  console.log(e.price.toString())
});

const x = 9007199254740999n;
const y = 9007199254740992n;

// await bigInt.create({
//   x:x,
//   y:y
// })

const int = await bigInt.findOne().skip(1);

const a = int.x;
const b = int.y;

console.log(a === b)

console.log(typeof int.x)

await marks.createIndexes();
// await marks.syncIndexes();
// await marks.create({
//   name:"Ilyas",
//   marks:{
//     Iqbaliyat:90,
//     English:60,
//     EnvScience:72,
//   }
// })

// const dupStudent = await marks.aggregate(
//   [
//     {$group:{
//       _id:"$name:",
//       ids:{$push:"$_id"},
//       count:{$sum:1}
//     }}
//     ,{
//       $match:{count:{$gt:1}}
//     }

//   ]
// )

// for (const stu of dupStudent) {
//   console.log(stu)
//   stu.ids.shift();
//   await marks.deleteMany({_id:{$in:stu.ids}});
// }

const ilyasdata = await marks.findOne({ name: "Ilyas" }, { _id: 0, marks: 1 });

//for single result
console.log(ilyasdata.marks.get("English"))




//direct method for maps

const data = ilyasdata.marks

console.log(data['English'])


for (const [subject,score] of data) {
  console.log(subject)
}


//For all results by changing into object
const objdata = Object.fromEntries(ilyasdata.marks);

for (const key in objdata) {

  const element = objdata[key];
  console.log(element)

}

const jdata = ilyasdata.toJSON();
// console.log(jdata)
for (const key in jdata) {

  const element = jdata[key];
  // console.log(element.English)

}


// await schema.create({
//   data:{
//     price:120
//   }
// })



// await uuid.create({
//   name:"Sbhan",
// })

const uuidData = await uuid.find();

for (const id of uuidData) {
  // console.log(typeof id._id)
}
