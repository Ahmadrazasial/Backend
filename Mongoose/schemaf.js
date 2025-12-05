import mongoose from "mongoose";
import { ids , methods,users ,quser} from "./models/features.js";


await mongoose.connect("mongodb://localhost:27017/features")


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

const userfnd = await users.findOne({name:"Mushtaq"})

console.log( await userfnd.adults());

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