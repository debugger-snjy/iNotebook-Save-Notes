// This file is used for Authentication Purpose when user login in the app

// Importing the express Package
const express = require('express');

// Create a router of the express
const router = express.Router()

// Importing the user schema from User Mongoose Model
const User = require("../models/User");

// Also, we have to change the get request to post request
router.post('/', (req, res) => {

    console.log("Here, you will get authenticate here")

    // To access the body of the request, we have to use the req.body function to get the data in the request body
    console.log(req.body)
    // But for using req.body() :
    // Two things have to be done :
    //      - Use the middle ware express.json() to access and view the json data from the request
    //      - Add the content-type as "application/json" in the request Headers


    // Now, saving the data in the Database that we get from the request API body
    // Also using the schema of the user to save the data as per the schema
    const userdata = User(req.body);
    
    // Saving the Data in the Moongose Database !
    if(userdata.save()){
        console.log("Data Saved in the Database !");
    }
    else{
        console.log("Data not saved in the Database !");
    }

    res.send("This is Authentication Page");

})

module.exports = router