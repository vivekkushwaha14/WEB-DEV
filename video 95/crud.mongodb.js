// CRUD operation
use("crudDB")
console.log(db)

// create operation
db.createCollection("courses")

db.courses.insertOne({
    "name":"web development",
    "price":0,
    "assigments":12,
    "project":45
})

db.courses.insertMany([
        {
          "name": "Python Masterclass",
          "price": 0,
          "assignments": 10,
          "projects": 30
        },
        {
          "name": "JavaScript Basics",
          "price": 0,
          "assignments": 8,
          "projects": 20
        },
        {
          "name": "C# for Beginners",
          "price": 0,
          "assignments": 15,
          "projects": 40
        },
        {
          "name": "Web Development Fundamentals",
          "price": 0,
          "assignments": 12,
          "projects": 35
        },
        {
          "name": "Java Programming Essentials",
          "price": 0,
          "assignments": 14,
          "projects": 38
        },
        {
          "name": "ReactJS Crash Course",
          "price": 0,
          "assignments": 10,
          "projects": 25
        },
        {
          "name": "SQL Simplified",
          "price": 0,
          "assignments": 12,
          "projects": 30
        },
        {
          "name": "Responsive Web Design",
          "price": 0,
          "assignments": 10,
          "projects": 28
        },
        {
          "name": "Node.js for Beginners",
          "price": 0,
          "assignments": 13,
          "projects": 36
        },
        {
          "name": "Frontend Development with Vue.js",
          "price": 0,
          "assignments": 11,
          "projects": 32
        }
      ]
      )




// read
// let a = db.courses.find({price:0})
// console.log(a)
// console.log(a.count())
// console.log(a.toArray())


// let b = db.courses.findOne({price:0})
// console.log(b)


// update

// db.courses.updateOne({price:0}, {$set:{price:100}})
// db.courses.updateMany({price:0}, {$set:{price:1000}})


// delete

// db.courses.deleteOne({price:100})
db.courses.deleteMany({price:0})





