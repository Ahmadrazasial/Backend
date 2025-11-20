use("fruitsdb");

db.smrfruit.find({price:{$lt:500}}).skip(2);

db.dryfruit.find({price:{$gt:300}},{price:1,_id:0}).sort({price:1}).skip(1);

// db.spgfruit.find().count();

// db.spgfruit.createIndex({price:1});

db.spgfruit.find({}).min({price:300}).hint({price:1});

db.wntrfruit.createIndex({price:1});

db.wntrfruit.find().max({price:5000}).hint({price:1})

//Next() & hasnext()

// db.fallfruit.insertMany(
//     [
//   { "name": "Apple",            "price": 250,  "origin": "USA" },
//   { "name": "Pear",             "price": 220,  "origin": "China" },
//   { "name": "Persimmon",        "price": 300,  "origin": "Korea" },
//   { "name": "Pomegranate",      "price": 350,  "origin": "Iran" },
//   { "name": "Grapes",           "price": 180,  "origin": "Pakistan" },
//   { "name": "Fig",              "price": 400,  "origin": "Turkey" },
//   { "name": "Mandarin",         "price": 200,  "origin": "Spain" },
//   { "name": "Quince",           "price": 320,  "origin": "Afghanistan" },
//   { "name": "Pumpkin",          "price": 150,  "origin": "India" },
//   { "name": "Sweet Potato",     "price": 140,  "origin": "Nepal" },
//   { "name": "Guava",            "price": 160,  "origin": "Pakistan" },
//   { "name": "Cranberry",        "price": 500,  "origin": "USA" },
//   { "name": "Kiwi",             "price": 280,  "origin": "New Zealand" },
//   { "name": "Black Plum",       "price": 260,  "origin": "India" },
//   { "name": "Custard Apple",    "price": 300,  "origin": "Sri Lanka" },
//   { "name": "Mulberry",         "price": 350,  "origin": "Afghanistan" },
//   { "name": "Starfruit",        "price": 270,  "origin": "Malaysia" },
//   { "name": "Raspberry",        "price": 600,  "origin": "USA" },
//   { "name": "Blueberry",        "price": 650,  "origin": "Canada" },
//   { "name": "Date Plum",        "price": 330,  "origin": "Iran" }
// ]
// )

let cursor = db.fallfruit.find();

console.log(cursor.explain())

while (cursor.hasNext()) {
    let fruit = cursor.next();
    // console.log(fruit)

    if(fruit.price < 300){

    db.fallfruit.updateOne({_id:fruit._id},[{$set:{cost:{$subtract:["$price",30]}}}])
    }else{
        db.fallfruit.updateOne({_id:fruit._id},[{$set:{cost:{$subtract:["$price",50]}}}])
    }
}

console.log(cursor.isClosed())


// while (cursor.hasNext()) {
//     console.log(cursor.next().cost)
// }


let cloned = db.fallfruit.find({name:"Apple"}).skip(1);

while (cloned.hasNext()) {
    let f = cloned.next();

    db.fallfruit.deleteOne({_id:f._id});
}

let fruits = db.fallfruit.aggregate([
    {$group: {
      _id: "$name",
      ids:{$push:"$_id"},
      count: {
        $sum: 1
      }
    }},{$match: {
      count:{$gt:1}
    }},
])

while (fruits.hasNext()) {
    let fruit = fruits.next()
    printjson(fruit)
    fruit.ids.shift();
    db.fallfruit.deleteMany({_id:{$in:fruit.ids}})
}
