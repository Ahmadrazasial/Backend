import mongoose from "mongoose";
import { ids , methods,users ,quser,indx,virtual,alias,parenta,Dog,Cat,animals} from "./models/features.js";
import express from "express";
const app = express();
const port = 3000




await mongoose.connect("mongodb://localhost:27017/features")

const db = mongoose.connection.db;


// ids

/* const id = new ids({
     name:"AR",
     _id:"acf"+ 56
 })

 id.save(); */

//methods

// const wild = await methods.create({
//     animal:"Deer",
//     type:"Wild"
// })

const wildtype = await methods.findOne({animal:"Lion"});
// console.log(wildtype);

console.log(await wildtype.similar())

// const user = await users.create({
//     name:"Mushtaq",
//     age:32
// })

const m = await users.find();

m.forEach(e=>{
    console.log(e.checkAge())
})



//statics

const userfnd = await users.findOne({name:"Mushtaq"})

console.log( await userfnd.adults());

//query helpers

const Mushtaq = await users.findbyName("mushtaq")
console.log(Mushtaq)


const byage = await users.findbyAge(12);
console.log(byage)

console.log( await users.total());

// const user2 = await quser.create({
//     name:"nawaz",
//     age:31
// })

const queued = await quser.find().search("bab")

const aged = await quser.find().byAge(18).start("a")


// console.log(queued[0].age,aged)

const ba = await quser.find({
    $expr:{$eq:[{$substr:["$name",0,1]},"b"]}
})

console.log(ba)

//indexed

// const indxin = await indx.create({
//     veg:"Ladyfinger",
//     season:"Summer",
//     price:80.50
// })

// console.log(await indx.indxdatas.getIndexes());

console.log(await indx.collection.getIndexes())
console.log(await quser.collection.getIndexes())

// virtual 

// const vrtls = await virtual.create({
//     vegName:"karela",
//     cost:48.25,
// })

const veg = await virtual.findOne({vegName:"karela"});

console.log(veg) 
 veg.totalCost = 53.075

// console.log(veg.price)

await veg.save();

const cuc = await virtual.find({cost:30.75});

for (const veg of cuc) {
    console.log(veg.vegName)
}

//Alais

// const aliasAdd = await alias.create({
//     n:"Ahmad Raza"
// })


const aliasget = await alias.find();

console.log(aliasget[0].name)

// const p = await parenta.create({
//     c:{
//         n:"Ahmad Raza"
//     },
//     p:{
//         f:"M Sharif"
//     }
// })

await parenta.updateOne({c:{$type:"object"}},{$unset:[{c:""},{p:""}]})

const pget = await parenta.find();

console.log(pget);

app.get('/json',(req,res)=>{
    res.json(pget)
})

app.listen(port,()=>{
    console.log("running")
})

// await Dog.create({
//     name:"lusi",
//     breed:"local food"
// })

// await Cat.create({
//     name:"local",
//     color:"white, broen"
// })

const dget = await animals.find({});

console.log(dget)

console.log(dget)

console.log(await animals.collection.name)