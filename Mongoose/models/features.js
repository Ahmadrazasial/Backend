import mongoose, { model, Query, Schema } from "mongoose";
// import { mixed } from "./types";


//ids of schema

const idSchema = new mongoose.Schema({
    name:{type:String,unique:true},
    _id:mongoose.Schema.Types.Mixed
})

//methods of  schema

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

//statics of schema

usersSchema.statics.findbyName = function (name) {
    return this.find({name: new RegExp(name,'i')})
}

usersSchema.statics.findbyAge = function (age) {
    return age >= 18;
}

usersSchema.statics.total = function () {
    return this.countDocuments();
}

//query helpers of schema


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

//indexes of schema

const indxSchema = new mongoose.Schema({
    veg:String,
    season:String,
    price:{type:Schema.Types.Decimal128}
})

indxSchema.index({veg:1},{required:true,unique:true});

//virtuals of schema

const vrtSchema = new mongoose.Schema({
    vegName:{type:String,unique:true},
    cost:{type:Schema.Types.Decimal128},
    price:{type:Schema.Types.Decimal128}
},{toJSON:{virtuals:true},toObject:{virtuals:true}})

vrtSchema.virtual('totalCost').get(function(){
                const costs = parseFloat(this.cost.toString());
                return mongoose.Types.Decimal128.fromString( (costs + costs *  10 / 100).toFixed(3));
            }
).set(function(v){
                const total = parseFloat(v.toString());
                this.price = mongoose.Types.Decimal128.fromString((total * 1.4 ).toFixed(3));
                this.markModified('price')
            }
        )

 // aliases
 
 const alisaSchema = new mongoose.Schema({
    n:{
        type:String,
        unique:true,
        alias:'name'
    },
 },{_id:false})

 const Pschema = new mongoose.Schema({
    c:alisaSchema,
    p:{
        f:{
            type:String,alias:'p.first'
        }
    }
 },{autoIndex:true,timestamps:true,toJSON:{virtuals:true,transform(doc,ret){
    delete ret._id
    delete ret.id
    delete ret.__v
    ret.createdAt = new Date(ret.createdAt).toLocaleString('en-PK',{timeZone:'Asia/Karachi'})
    ret.updatedAt = new Date(ret.updatedAt).toLocaleString('en-PK',{timeZone:'Asia/Karachi'})
    ret.p = ret.p.f.slice(1)
    ret.c = (ret.c.n).split(" ", 1).toString()
    return ret
 }},toObject:{virtuals:true},collection:'parentAlais'}) 

//  Pschema.index({c:1,p:1},{unique:true})


 const dscrmSchema = new mongoose.Schema({

name:String

 },{discriminatorKey:"type",collation:'discriminator'})

 const animals = mongoose.model('disanimals',dscrmSchema);

 const Dog = animals.discriminator('Dog',new Schema({breed:String}));
 const Cat = animals.discriminator('Cat',new Schema({color:String}))

const quser = mongoose.model('quser',querySchema)
const ids = mongoose.model('id',idSchema);
const methods = mongoose.model('method',insSchema)
const users = mongoose.model('usermethod',usersSchema);
const indx = mongoose.model('indxdata',indxSchema);
// console.log(idSchema.path('_id'))
const virtual = mongoose.model('virtual',vrtSchema);
const alias = mongoose.model('alias',alisaSchema)
const parenta = mongoose.model('palais',Pschema)

export {ids,methods,users,quser,indx,virtual,alias,parenta,Dog,Cat,animals}