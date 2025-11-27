import  mongoose  from "mongoose";

const vegSchema = new mongoose.Schema({
    name:String,
    origin:String,
    price:Number,
})

 const smrVeg = mongoose.model('smrVeg',vegSchema)
 const wntrVeg = mongoose.model('wntrVeg',vegSchema)

 export{smrVeg,wntrVeg}