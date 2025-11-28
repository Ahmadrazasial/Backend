
import mongoose from "mongoose";
import { date } from './models/types.js';

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
