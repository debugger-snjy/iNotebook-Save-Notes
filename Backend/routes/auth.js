// This file is used for Authentication Purpose when user login in the app

// Importing the express Package
const express = require('express');

// Create a router of the express
const router = express.Router()

router.get('/',(req,res)=>{

    console.log("Here, you will get authenticate here")

    // To access the body of the request, we have to use the req.body function to get the data in the request body
    console.log(req.body)
    // But for using req.body() :
    // Two things have to be done :
    //      - Use the middle ware express.json() to access and view the json data from the request
    //      - Add the content-type as "application/json" in the request Headers

    res.send("This is Authentication Page")
})

module.exports = router