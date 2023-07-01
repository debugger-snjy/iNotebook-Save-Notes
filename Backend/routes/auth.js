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
router.post('/', [
    body("name","Name is Empty").notEmpty(),
    body("email","email is Empty").notEmpty(),
    body("password","password is Empty").notEmpty(),

    body("name","Enter a valid Name").isAlpha(),
    body("email","Enter a valid Email").isEmail(),
    body("password","Enter a valid Password").isLength({ min: 5, max : 20})
], (req, res) => {

    console.log("Here, you will get authenticate here")

    // Getting the Results after validations
    const errors = validationResult(req);

    // If we have errors :
    if (!errors.isEmpty()) {
        // sending the errors that are present
        return res.status(400).json({ errors: errors.array() });
    }

    // After Validating :
    // Creating the User and it will be saved in the Database
    User.create({
        name : req.body.name,
        password : req.body.password,
        email : req.body.email
    }).then(userData => res.json(userData))
    .catch(err => {
        console.log(err);
        res.json({error : "Account already exists with this Email ID.", description : err.message})
    })
})

module.exports = router