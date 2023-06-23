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
        unique : true,
    },
    date: {
        type : Date,
        default : Date.now,
    },
});

// Exporting the model: 
// model takes a name and the schema
module.exports = mongoose.model("user",UserSchema);