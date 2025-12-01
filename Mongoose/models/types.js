import mongoose, { Schema, Types } from "mongoose";

let dateschema = new mongoose.Schema({
    date:{type:String,required:true},
    birth:{type:String,required:true,unique:true},
    age:Number
    
})


//     dateschema.virtual('dateformatted').get(function(){
//         return  (this.date).toLocaleDateString()

//     })
//    dateschema.virtual('birthformatted').get(function(){
//         return  (this.birth).toLocaleDateString()
       
//     })

let bufferSchema = new mongoose.Schema({
    filename:String,
    filedata:Buffer,

})

let mixedSchema = new mongoose.Schema({
    name:String,
    working:mongoose.Schema.Types.Mixed

})

const unionSchema = new mongoose.Schema({
    values:{type:Schema.Types.Union,of:[String,Number,Array]}
})


const objectSchema = new mongoose.Schema({
    bestFriend:{type:Schema.Types.ObjectId,unique:true,ref:"friend"}
})


const friendSchema = new mongoose.Schema({
    name:String,
    friend:Boolean,
})

const carSchema = new mongoose.Schema({
    driver:mongoose.ObjectId
})



const file = mongoose.model('file',bufferSchema);
const mixed = mongoose.model('mix',mixedSchema);
const date = mongoose.model('birth',dateschema);
const union = mongoose.model('union',unionSchema);
const friend = mongoose.model('friend',friendSchema);
const obj = mongoose.model('bestfriend',objectSchema);
const car = mongoose.model('car',carSchema);
export{date,file,mixed,union,obj,car,friend}



