//CRUD Operations

use("fruitsdb");

//Create

// db.createCollection("smrfruit");

// db.smrfruit.insertMany(
//     [
//         {
//             "name": "Mango",
//             "price": 200,
//             "origin": "local"
//         },
//         {
//             "name": "Grapes",
//             "price": 300,
//             "origin": "local/foreign"
//         },
//         {
//             "name": "Watermelon",
//             "price": 150,
//             "origin": "local"
//         },
//         {
//             "name": "Lychee",
//             "price": 400,
//             "origin": "foreign"
//         },
//         {
//             "name": "Peach",
//             "price": 250,
//             "origin": "local/foreign"
//         },
//         {
//             "name": "Apricot",
//             "price": 280,
//             "origin": "local"
//         }
//     ]
// )

// db.createCollection("wntrfruit");

// db.wntrfruit.insertMany(
//     [
//         { "name": "Orange (Kinnow)", "price": 180, "origin": "local" },
//         { "name": "Apple", "price": 250, "origin": "local/foreign" },
//         { "name": "Pomegranate (Anar)", "price": 300, "origin": "local" },
//         { "name": "Guava (Amrood)", "price": 200, "origin": "local" },
//         { "name": "Strawberry", "price": 350, "origin": "local" }


//     ])

// db.createCollection("spgfruit");

// db.spgfruit.insert([

//     {
//         "name": "Mulberry (Shehtoot)",
//         "price": 180,
//         "origin": "local"
//     },

//     {
//         "name": "Loquat (Lokaat)",
//         "price": 220,
//         "origin": "local"
//     },

//     {
//         "name": "Strawberry",
//         "price": 300,
//         "origin": "local/foreign"
//     },

//     {
//         "name": "Papaya",
//         "price": 250,
//         "origin": "local"
//     },


//     {
//         "name": "Apple",
//         "price": 270,
//         "origin": "foreign"
//     },


//     {
//         "name": "Kiwi",
//         "price": 400,
//         "origin": "foreign"
//     }
// ])
// db.createCollection("fallfruit")

// db.fallfruit.insertOne(
//     [

//         { "name": "Apple", "price": 250, "origin": "local/foreign" },
//         { "name": "Pomegranate (Anar)", "price": 300, "origin": "local" },
//         { "name": "Banana", "price": 180, "origin": "local" },
//         { "name": "Dates (Khajoor)", "price": 400, "origin": "local/foreign" },
//         { "name": "Pear (Nashpati)", "price": 220, "origin": "local" },
//         { "name": "Fig (Anjeer)", "price": 500, "origin": "foreign" },
//     ]
// )

// db.createCollection("dryfruit")
// db.dryfruit.insert(
//     [
//         { "name": "Almonds", "price": 1200, "origin": "local/foreign" },
//         { "name": "Cashews", "price": 1500, "origin": "foreign" },
//         { "name": "Walnuts", "price": 2000, "origin": "local/foreign" },
//         { "name": "Dates (Khajoor)", "price": 400, "origin": "local/foreign" },
//         { "name": "Raisins (Kishmish)", "price": 600, "origin": "local/foreign" },
//         { "name": "Pistachios", "price": 1800, "origin": "foreign" }
//     ]

// )

//Read

// let a = db.dryfruit.find({ name: "Almonds" })
// console.log(a.toArray());

// let b = db.smrfruit.find({ name: "Mango" });

// console.log(b);

// let c = db.wntrfruit.findOne({ name: "Apple" });

// console.log(c);

// let d =  db.spgfruit.findOne(
//     { name: "Loquat (Lokaat)" },
//     {price:1,_id:0}
// );

// console.log(d);




// let e = db.fallfruit.find().sort({ _id: -1}).limit(1).toArray();
// let doc = e[0]
// let fruits = Object.keys(doc).filter(k => k !== "_id").map(k => doc[k]);
// console.log()


// for (const fruit of fruits) {
//     console.log(`${fruit.name} : ${fruit.price}`)
// }

// fruits.forEach(fruit => {
//     console.log(fruit.name)
// });

// db.dryfruit.find({name:"Almonds"},{price:1,_id:0}).limit(1);
// let dryfruits = db.dryfruit.find();
// // console.log(dryfruits)

// for (const fruit of dryfruits) {
//     console.log(fruit.name ,fruit.price)
// }


// async function fdo() {
//     let f = db.spgfruit.find()
//     while (await f.hasNext()) {
//         let fruit = await f.next();
//         console.log(fruit)
//     }
// }
// fdo()

// db.smrfruit.find({ origin: 'local' }, { name: 1, _id: 0 }).toArray()
//     .filter(f => f.name.length > 5).map(f => f.name);


   

//UPDATE

// db.dryfruit.updateMany({name:"Almonds"},{$set:{price:1000}});
// db.dryfruit.updateMany({name:"Walnuts",_id:-1},{$set:{price:2500}});
 db.dryfruit.updateMany({name:"Walnuts",_id:-1},{$set:{price:2500}});