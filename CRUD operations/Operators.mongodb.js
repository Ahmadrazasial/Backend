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

db.spgfruit.updateMany({},[{$set: {
  cost: {$subtract:["$price",50]}
}}])

// db.spgfruit.deleteOne({$expr:{$eq:["$cost",{$subtract:["$price",50]}]}})

db.dryfruit.deleteOne({$expr:{$eq:["$cost",2150]}});

// db.smrfruit.updateMany({$expr:{$ne:["$name",{$toLower:"$name"}]}},[{$set:{name:{$toLower:"$name"}}}]);

// db.smrfruit.find({name:"Watermelon"})

db.smrfruit.updateMany({name:{$type:"object"}},{$unset:{name:""}});

let fruits =  db.smrfruit.find().toArray()

console.log(fruits)

let index = 0;

let names = ["mango","grapes","Peach","Apricot","Lychee"];

for (const fruit of fruits) {
 
    db.smrfruit.updateMany({_id:fruit._id},{$set:{name:names[index]}})

    index++
}

// db.smrfruit.updateMany({$expr:{$ne:["$name",{$toLower:"$name"}]}},[{$set:{name:{$toLower:"$name"}}}]);

// db.spgfruit.updateMany({},{$max:{price:1000}});

// let nbr = Math.floor(Math.random() * (100 - 50) + 50)

// let newprice = nbr + 1000;
// console.log(newprice);

// db.spgfruit.updateMany({$expr:{$gt:["$price","$cost"]}},{$max:{price:newprice}})

db.spgfruit.updateMany({},[{$set:{price:{$max:[{$add:[{$floor:{$multiply:[{$rand:{}},99]}},1000]},"$price"]}}}])