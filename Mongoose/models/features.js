import mongoose, { model, Query, Schema } from "mongoose";
// import { mixed } from "./types";

const idSchema = new mongoose.Schema({
    name:{type:String,unique:true},
    _id:mongoose.Schema.Types.Mixed
})

const insSchema = new mongoose.Schema({
    animal:String,
    type:String,
},{
     methods:{
        similar(){
            return mongoose.model('method').find({type:this.type})
        }
    }
})

insSchema.index({animal:1},{unique:true,required:true})

const usersSchema = new mongoose.Schema({
    name:{type:String,unique:true},
    age:{type:Schema.Types.Int32}
})
 usersSchema.methods.checkAge = function(){
    return this.age >= 18;
}
usersSchema.methods.adults = function () {
    return  mongoose.model('usermethod').find({age:{$gte:18}})
}

usersSchema.statics.findbyName = function (name) {
    return this.find({name: new RegExp(name,'i')})
}

usersSchema.statics.findbyAge = function (age) {
    return age >= 18;
}

usersSchema.statics.total = function () {
    return this.countDocuments();
}


const querySchema = new mongoose.Schema({
    name:{type:String,required:true,unique:true},
    age:{type:Schema.Types.Int32}
},{
query:{
    search(keyword){
        return this.where({name:new RegExp(keyword,'i')})
    }
    ,byAge(age){
       return this.where({age:{$gte:age}})
    }
    ,start(letter){
        return this.where({name:new RegExp("^" + letter,'i')})
    }
}
}) 




const quser = mongoose.model('quser',querySchema)
const ids = mongoose.model('id',idSchema);
const methods = mongoose.model('method',insSchema)
const users = mongoose.model('usermethod',usersSchema);
// console.log(idSchema.path('_id'))

export {ids,methods,users,quser}