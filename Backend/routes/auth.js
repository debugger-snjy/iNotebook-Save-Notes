// This file is used for Authentication Purpose when user login in the app

// Importing the express Package
const express = require('express');

// Create a router of the express
const router = express.Router()

router.get('/',(req,res)=>{

    console.log("Here, you will get authenticate here")

    // we can send the response in the form of json
    let obj = {
        a : "this",
        num : 1610
    }
    res.json(obj)
})

module.exports = router