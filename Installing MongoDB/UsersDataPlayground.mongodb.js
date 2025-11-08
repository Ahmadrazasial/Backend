

// Select the database to use.
use('UserDatabase');

// Insert a few documents into the sales collection.
db.getCollection('user').insertMany([
  {
    name: "Ahmad Raza",
    country: "Pakistan",
    phone: "+92 300 1234567"
  },
  {
    name: "Ali Khan",
    country: "Pakistan",
    phone: "+92 321 9876543"
  },
  {
    name: "John Smith",
    country: "United States",
    phone: "+1 202 555 0198"
  },
  {
    name: "Maria Gonzalez",
    country: "Spain",
    phone: "+34 612 345 678"
  },
  {
    name: "Liu Wei",
    country: "China",
    phone: "+86 138 0013 4567"
  },
  {
    name: "Aisha Ibrahim",
    country: "Nigeria",
    phone: "+234 803 456 7890"
  },
  {
    name: "Emma Brown",
    country: "United Kingdom",
    phone: "+44 7700 900123"
  },
  {
    name: "Hiroshi Tanaka",
    country: "Japan",
    phone: "+81 90 1234 56"
  }])


// Print a message to the output window.
console.log(`Data is inserted`);

