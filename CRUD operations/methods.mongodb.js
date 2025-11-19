use("fruitsdb");

db.smrfruit.find({price:{$lt:500}}).skip(2);

db.dryfruit.find({price:{$gt:300}},{price:1,_id:0}).sort({price:1}).skip(1);

// db.spgfruit.find().count();

// db.spgfruit.createIndex({price:1});

db.spgfruit.find({}).min({price:300}).hint({price:1});

db.wntrfruit.createIndex({price:1});

db.wntrfruit.find().max({price:5000}).hint({price:1})
