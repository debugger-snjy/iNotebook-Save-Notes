// It is a Express JS File

// Adding the Express JS Code :
const express = require('express')

// Now, Importing the connectToMongo function from "db.js"
const connectToMongo = require('./db');

// Importing cors package :
const cors = require('cors')

// Checking for the connection
connectToMongo()

const app = express()
// Changing the port number as 3000 port is reserved for react which will make us difficult for us later
const port = 5000

// Adding Middlewares :
app.use(cors()); // Added cors package for removing the cors error
app.use(express.json())  // to view the request body data

// Available Routes
// Basic First Route
app.get('/', (req, res) => {
  res.send("Hello Sanjay! <br> This is Sample Route in Backend")
})

// Route for login
app.get('/login', (req, res) => {
  res.send("This is Login Page")
})

// Route for signup
app.get('/signup', (req, res) => {
  res.send("This is Signup Page")
})

// Route for api Authentication
app.use('/api/auth',require("./routes/auth.js"))

// Route for api Notes
app.use('/api/notes',require("./routes/notes"))


// Listening to the port
app.listen(port, () => {
  console.log(`iNotebook app listening on port ${port}`)
})