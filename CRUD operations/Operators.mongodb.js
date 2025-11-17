use("fruitsdb");

db.smrfruit.find({$expr:{$gt:["$price",300]}});

db.smrfruit.find({price:{$lt:300}})

db.smrfruit.find({price:{$eq:300}})

db.smrfruit.find({name:{$type:"object"}})

db.smrfruit.find({cost:{$exists:true}})

let alm = db.dryfruit.find({name:{$in:["Almonds"]}}).toArray();

// alm.forEach(e => {
//     console.log(e.price)
// });

// for (const e of alm) {
//     console.log(e._id)
// }

// db.smrfruit.updateMany({},{$rename:{"Grapes":"grapes"}})

db.wntrfruit.updateMany({cost:{$type:"object"}},{$unset:{cost:""}})

db.wntrfruit.updateMany({},
    [
    {$set:{
    price:{$add:["$price",50]},
    cost:{$subtract:["$price",50]}
    }
}]
)

