// This file is used for Authentication Purpose when user login in the app

// Importing the express Package
const express = require('express');

// Create a router of the express
const router = express.Router()

// Importing the user schema from User Mongoose Model
const User = require("../models/User");

// Importing the express-validator
const { body, validationResult } = require('express-validator');

// Also, we have to change the get request to post request
// We will add the validations after the endpoint in the post method
// Here, no login required
router.post('/createuser', [
    body("name", "Name is Empty").notEmpty(),
    body("email", "email is Empty").notEmpty(),
    body("password", "password is Empty").notEmpty(),

    body("name", "Enter a valid Name").isAlpha(),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Enter a valid Password").isLength({ min: 5, max: 20 })
], async (req, res) => {

    console.log("Here, you will get authenticate here")

    // Getting the Results after validations
    const errors = validationResult(req);

    // If we have errors, sending bad request with errors
    if (!errors.isEmpty()) {
        // sending the errors that are present
        return res.status(400).json({ errors: errors.array() });
    }

    // Here, We have to change the code as we have to verify the duplicate email in the database
    // Check whether the user with this email exists or not
    try {
        // we have to add await as it is a promise and we have to wait till it gets resolves
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "Account already exists with this Email ID" })
        }
        // After Validating :
        // Creating the User if not exists and it will be saved in the Database
        // TODO : we don't save password in simple text form
        let userData = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        })
        return res.json(userData)

        // removing the then and catch as we have remove the promise
        // Also, Earlier when any error occurs, we only send message "Account already exists with this Email ID."
        // There may be other errors as well
        // But now solving this error

        // .then(userData => res.json(userData))
        // .catch(err => {
        //     console.log(err);
        //     res.json({error : "Account already exists with this Email ID.", description : err.message})
        // })
    } catch (error) {
        console.log("Error Occured !")
        console.error("Error : ",error.message)
        return res.status(500).json({error : "Some Error Occured !", description : error.message})
    }

})

module.exports = router