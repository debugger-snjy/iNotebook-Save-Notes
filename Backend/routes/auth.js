// This file is used for Authentication Purpose when user login in the app

// Importing the express Package
const express = require('express');

// Create a router of the express
const router = express.Router()

// Importing the user schema from User Mongoose Model
const User = require("../models/User");

// Importing the express-validator
const { body, validationResult } = require('express-validator');

// Importing bcryptjs for hashing, salt in password
const bcrypt = require('bcryptjs');

// Importing dotenv for accessing the Environment Variables
const dotenv = require('dotenv');

// Loads .env file contents into process.env by default
dotenv.config();

// Creating JWT_SECRET :
// const JWT_SECRET = "Sanjayisagoodcoderok";
// This should be hidden and not be disclosed
// Putting it in .env.local
const JWT_SECRET = process.env.JWT_SECRET_KEY;

// Importing jsonwebtoken
const jwt = require("jsonwebtoken");

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
        // Here we are saving password in hash form :

        // generating salt :
        const salt = await bcrypt.genSalt(10);
        // Generating a secure password & using await as it will return a promise and we have to wait until we get the results
        const securePass = await bcrypt.hash(req.body.password,salt);
        
        // Getting the Data of the user
        let userData = await User.create({
            name: req.body.name,
            // password: req.body.password, ==> Removing the Password as simple text and saving it in form of Hash
            password: securePass,
            email: req.body.email
        })
        
        // We have successfully create a user, we don't return the details
        // We will return some token which will be helpful in login verification
        // Tokens are of 2 Types : Session Tokens and Json Web Token(JWT)
        // We are using JWT authentication
        // For that, we have a package in nodejs, which is "jsonwebtoken"
        // Visit "jwt.io" for the example of JWT
        // JWT contains 3 parts : 
        //      1. Header
        //      2. Payload
        //      3. Signature
        
        // As we have got the userData, we will only save id of the user in the form of JSON
        // and then it will be passed to the jwt and get signed!
        const userID_Data = {
            user : {
                id : userData.id,
            }
        }
        
        // Signing the json web token
        const authToken = jwt.sign(userID_Data,JWT_SECRET);

        // Verifying the JWT Token but it will be needed in another endpoint like login endpoint
        // console.log(jwt.verify(authToken,JWT_SECRET))
        
        // return res.json(userData)
        return res.json({authToken})
        // {authToken} is same as {"authToken" : authToken}

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