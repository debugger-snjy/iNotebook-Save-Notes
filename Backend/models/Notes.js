const mongoose = require('mongoose');

// Defining the Schema for the User
const NotesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description : {
        type: String,
        required: true,
    },
    tags : {
        type : String,
        default : "General"
    },
    date: {
        type : Date,
        default : Date.now,
    },
});

// Exporting the model: 
// model takes a name and the schema
module.exports = mongoose.model("notes",NotesSchema);