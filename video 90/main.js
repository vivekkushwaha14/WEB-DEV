const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")

app.use(express.static("public"))

// middleware 1
app.use((req, res, next) => {
    console.log(req.headers)
    req.vivek = "this is express js";

    
    fs.appendFileSync("logs.txt", `${Date.now()} is a get ${req.method}\n`)
    console.log(`${Date.now()} is a get ${req.method}`)
    // res.send("middleware1")/
    next()
})

// middleware 2
app.use((req, res, next) => {
    console.log('m2')
    next()
})


app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Hello about!' + req.vivek)
})
app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})