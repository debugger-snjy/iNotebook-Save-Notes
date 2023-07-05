// This file is used for Notes Purpose

// Importing the express Package
const express = require('express');

// Create a router of the express
const router = express.Router();

// Importing the notes schema from User Mongoose Model
const Notes = require("../models/Notes");

// Importing the Middleware File :
const fetchUser = require("../middleware/fetchUserId")

// Route 1 : Fetching all the Notes of the User using GET Request "/api/notes/fetchallnotes"
// Here, Login is Required ==> Middleware needed
router.get('/fetchallnotes', fetchUser , async (req,res)=>{
    
    // Finding all the notes 
    // Also to be specific, we have to add the user in the parameter to find notes of only that user
    const notes = await Notes.find({user : req.user.id});
    res.json(notes);
})

module.exports = router