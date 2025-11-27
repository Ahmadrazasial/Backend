import mongoose from "mongoose";
import { smrVeg,wntrVeg } from "./models/veg.js";


let connect = await mongoose.connect('mongodb://localhost:27017/vegDB');

// console.log(connect.isClosed())

// smrVeg.insertMany(
//     [
//   { "name": "Cucumber", "price": 40, "origin": "Pakistan" },
//   { "name": "Tomato", "price": 60, "origin": "Pakistan" },
//   { "name": "Brinjal (Eggplant)", "price": 70, "origin": "Pakistan" },
//   { "name": "Bitter Gourd", "price": 90, "origin": "Pakistan" },
//   { "name": "Bottle Gourd", "price": 50, "origin": "Pakistan" },
//   { "name": "Okra (Lady Finger)", "price": 100, "origin": "Pakistan" }
 
//     ])
  // const expVeg = await smrVeg.find({price:{$eq:100}})
  // console.log(expVeg)

  const dup = await smrVeg.aggregate([
    {
      $group:{
        _id:"$name",
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
     await smrVeg.deleteMany({_id:{$in:item.ids}})
  }

  //  wntrVeg.insertOne(
    
  // { "name": "Cauliflower", "price": 80, "origin": "Pakistan" },
  // { "name": "Cabbage",     "price": 50, "origin": "Pakistan" },
  // { "name": "Carrot",      "price": 60, "origin": "Pakistan" },
  // { "name": "Spinach",     "price": 40, "origin": "Pakistan" },
  // { "name": "Turnip",      "price": 45, "origin": "Pakistan" },
  // { "name": "Green Peas",  "price": 120,"origin": "Pakistan" }


  // )

  // await wntrVeg.deleteMany({

  // $expr: { $eq: [ { $size: { $objectToArray: "$$ROOT" } }, 2 ] }

  // })

  await smrVeg.updateMany({price:{$exists:true}},[{$set:{cost:{$subtract:["$price",30]}}}],{strict:false,updatePipeline:true})
    await smrVeg.updateMany({price:{$exists:true}},[{$set:{cost:{$multiply:["$price",0.7]}}}],{strict:false,updatePipeline:true})
