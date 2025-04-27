const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.get('/', (req, res) => {
    let sitename = "ADIDAS"
    let searchtext = 'search now'
    let arr = [1,43,65]
  res.render("index.ejs", {sitename:sitename, searchtext:searchtext,arr:arr})
})

app.get('/blog/:slug', (req, res) => {
    let blogtitle   = "adidas why and when?"
    let blogcontent = 'Its a very good brand'
  res.render("blogpost", {blogtitle:blogtitle, blogcontent:blogcontent})
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})