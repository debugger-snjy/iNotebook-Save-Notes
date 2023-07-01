const mongoose = require('mongoose');

// Defining the Schema for the User
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email : {
        type : String,
        required : true,
    },
    date: {
        type : Date,
        default : Date.now,
    },
});

// Exporting the model: 
// model takes a name and the schema

const User = mongoose.model("user",UserSchema);
// User.createIndexes() // used to create indexes and don't save duplicates records
// To avoid creating 2 indexes, we will remove this and we will verfiy the duplicate user in the code itself (auth.js)
module.exports = User;