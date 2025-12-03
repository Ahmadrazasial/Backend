import mongoose, { Schema, Types } from "mongoose";
import crypto from "crypto";
import { buffer } from "stream/consumers";
import { type } from "os";




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

const arrSchema = new mongoose.Schema({
    name:[String],
    frnd:[friendSchema],
})

const nbrSchema = new mongoose.Schema({
    price:Number
})

const deci128Schema = new mongoose.Schema({
    price:mongoose.Schema.Types.Decimal128
})

const bigSchema = new mongoose.Schema({
    x:mongoose.Schema.Types.BigInt,
    y:mongoose.Schema.Types.BigInt,
})

const marksSchema = new Schema({
    name:{type:String,unique:true},
    marks:{
        type:Map,
        of:Number
    }
}) 

const subSchema = new mongoose.Schema({
    data:{
        type:nbrSchema,
        default:()=>({price:Math.floor(Math.random()* 100)})
    }
})

const uuidSchema = new mongoose.Schema({
    _id:{
        type:Buffer,
        default:()=> {
            const uuidString = crypto.randomUUID();
            return Buffer.from(uuidString.replace(/-/g, ''), 'hex')
        },
        options:{ subtype:4}
    },
    name:{type:String,unique:true}
})

const bookSchema = new mongoose.Schema({
    authorid:{type:Schema.Types.UUID,ref:"uuid"}
})

const file = mongoose.model('file',bufferSchema);
const mixed = mongoose.model('mix',mixedSchema);
const date = mongoose.model('birth',dateschema);
const union = mongoose.model('union',unionSchema);
const friend = mongoose.model('friend',friendSchema);
const obj = mongoose.model('bestfriend',objectSchema);
const car = mongoose.model('car',carSchema);
const arr = mongoose.model('arr',arrSchema);
const nbr = mongoose.model('nbr',nbrSchema)
const decimal = mongoose.model('decimal',deci128Schema)
const bigInt = mongoose.model('bigint',bigSchema);
const marks = mongoose.model('marks',marksSchema)
const schema = mongoose.model('nested',subSchema);
const uuid = mongoose.model('uuid',uuidSchema);
const book = mongoose.model('book',bookSchema);
export{date,file,mixed,union,obj,car,friend,arr,nbr,decimal,bigInt,marks,schema,uuid,book}




