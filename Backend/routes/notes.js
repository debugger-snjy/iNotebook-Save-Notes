// This file is used for Notes Purpose

// Importing the express Package
const express = require('express');

// Create a router of the express
const router = express.Router();

router.get('/',(req,res)=>{
    console.log("Here, you can see your notes")
    res.json([])
})

module.exports = router