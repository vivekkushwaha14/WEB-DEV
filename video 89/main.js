const express = require('express')

const blog = require('./router/blog')
const shop = require('./router/shop')


const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog',blog)
app.use('/shop',shop)


app.get('/', (req, res) => {
    console.log("its a get request")
    res.send('Hello Worldd1!')
})

app.post('/', (req, res) => {
    console.log("its a post request")
    res.send('Hello World post!')
})
app.put('/', (req, res) => {
    console.log("its a put request")
    res.send('Hello World put!')
})

app.delete('/', (req, res) => {
    console.log("its a delete request")
    res.send('Hello World delete')
})

app.get("/index", (req, res) => {
    console.log("its a index")
    res.sendFile('templates/index.html', { root: __dirname })
})

app.get("/api", (req, res) => {
   res.json({a:1, b:2,c:3,"name":"vivek", "interst":"coding"})
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})