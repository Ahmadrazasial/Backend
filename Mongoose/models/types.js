import mongoose from "mongoose";

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



const date = mongoose.model('birth',dateschema);
export{date}