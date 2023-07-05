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

// Route 3 : Updating an existing Note in the database using PUT Request "/api/notes/updatenote"
// Here, Login is Required ==> Middleware needed
// Here, we no need to check for the data
// Also, the user could update his/her note only so for that we have to check for the user as well
router.put('/updatenote/:id', fetchUser, [
    body("title", "Title can't be Empty !").notEmpty(),
    body("description", "Description can't be Empty !").notEmpty(),
    body("description", "Description should have minimum of 10 Letters !").isLength({ min: 10 })
], async (req, res) => {

    // Getting the Results after validations
    const errors = validationResult(req);

    // If we have errors, sending bad request with errors
    if (!errors.isEmpty()) {
        // sending the errors that are present
        return res.status(400).json({ errors: errors.array() });
    }

    // If no errors are present or found
    const { title, description, tag } = req.body;

    // Create a newNote Object with the new Updated Data 
    const newNote = {
        title : title,
        description : description,
        tag : tag
    }

    // Finding whether the same user who created note is updating or not
    
    // Finding the note from the database, whether the note exists or not
    // To access the key from the url, we use req.params.<key>
    // Here, we access the id from the url, we use req.params.id
    const note = await Notes.findById(req.params.id);

    // If that note doesn't exists, then returning the Bad Response
    if (!note){
        // return res.status(404).json({error : "Note Not Found !"})
        return res.status(404).send("Note Not Found !");
    }

    // If note exists in database, then getting its user
    // and then comparing that with the user which has been logged in (From where we get this ?)
    // We will get the id of user which is logged in from the middle ware or from the fetchUser function
    if(note.user.toString() !== req.user.id){
        // the note don't belong to that user and should not have any right ot update
        // 401 - Unauthorized
        // return res.status(401).json({error : "Access Denied !"})
        return res.status(404).send("Access Denied !");

    }

    // If code is reached here, that's means the note is belong to the user which is logged in and also that note exists
    const updatedNote = await Notes.findByIdAndUpdate(req.params.id,{$set : newNote},{new : true});
    return res.send(updatedNote);

})

module.exports = router