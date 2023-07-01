// Importing the Mongoose package
const mongoose = require('mongoose');

// Defining the Mongo URI for Database
// Now, Defining the Database of iNotebook
const mongoURI = "mongodb://localhost:27017/iNotebook"
// Saves the data into iNotebook Database

// Checking whether the node js is connected to mongoose or not
const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connection Successfull !");
    } catch (error) {
        console.log("Connection Failed !");
    }
}

// Exporting the connectToMongo function
module.exports = connectToMongo