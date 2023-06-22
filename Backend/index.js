// It is a Express JS File

// Adding the Express JS Code :
const express = require('express')

// Now, Importing the connectToMongo function from "db.js"
const connectToMongo = require('./db');

// Checking for the connection
connectToMongo()

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Sanjay!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})