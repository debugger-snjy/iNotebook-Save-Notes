// This file is used for Notes Purpose

// Importing the express Package
const express = require('express');

// Create a router of the express
const router = express.Router();

// Importing the notes schema from User Mongoose Model
const Notes = require("../models/Notes");

// Importing the express-validator
const { body, validationResult } = require('express-validator');

// Importing the Middleware File :
const fetchUser = require("../middleware/fetchUserId")

// Route 1 : Fetching all the Notes of the User using GET Request "/api/notes/fetchallnotes"
// Here, Login is Required ==> Middleware needed
router.get('/fetchallnotes', fetchUser, async (req, res) => {

    try {
        // Finding all the notes 
        // Also to be specific, we have to add the user in the parameter to find notes of only that user
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.log("Error Occured !")
        console.error("Error : ", error.message)
        return res.status(500).json({ error: "Internal Server Error !", description: error.message })
    }
})

// Route 2 : Adding Notes in the database using POST Request "/api/notes/addnote"
// Here, Login is Required ==> Middleware needed
router.post('/addnote', fetchUser, [
    body("title", "Title can't be Empty !").exists(),
    body("description", "Description can't be Empty !").exists(),
    body("description", "Description can't be Empty !").isLength({ min: 5 })
], async (req, res) => {

    try {
        console.log("Here, You can Add Note Here !")

        // Getting the Results after validations
        const errors = validationResult(req);

        // If we have errors, sending bad request with errors
        if (!errors.isEmpty()) {
            // sending the errors that are present
            return res.status(400).json({ errors: errors.array() });
        }

        // If no errors are present or found

        // Destructing Data from body
        const { title, description, tags } = req.body;

        // Creating a Note 
        const note = new Notes({ title, description, tags, user: req.user.id })

        // Saving note in database
        const savedNote = await note.save();

        // returning the saved note Details
        return res.status(200).json(savedNote)
    }
    catch (error) {
        console.log("Error Occured !")
        console.error("Error : ", error.message)
        return res.status(500).json({ error: "Internal Server Error !", description: error.message })
    }

})
module.exports = router