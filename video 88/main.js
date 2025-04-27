const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home', (req, res) => {
  res.send('Hello home!')
})
app.get('/about', (req, res) => {
  res.send('about us')
})
app.get('/contact', (req, res) => {
  res.send('contact ')
})
app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})
app.get('/blog/:slug/', (req, res) => {
    // for url  http://127.0.0.1:3000/blog/into-to-python
console.log(req.params)  // will output { slug: 'intro-to-python' }
console.log(req.query) // will output { slug: 'intro-to-python' } 

    
  res.send(`Hello ${req.params.slug}`)
})
// app.get('/blog/intro-to-js', (req, res) => {
//   res.send('Hello intro-to-js!')
// })
// app.get('/blog', (req, res) => {
//   res.send('Hello blog!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})