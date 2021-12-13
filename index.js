require('dotenv').config()
const express = require('express')
const app = express()

// app.use('/places', require('./controller/places.js'))
// app.use('/places', require(router))

app.get('/', (req, res) =>{
    res.send('<h1 style="color:red;" >Hello World</h1>')
})

app.get('*', (req, res) =>{
    res.status(404).send('<h1>404 Page</h1>')
})
app.listen(process.env.PORT)
