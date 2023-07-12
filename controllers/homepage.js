const router = require('express').Router();
const {User, Comment, Like, Travelpost} = require('../models');
const authorization = require('../utils/auth');


//render all travelposts with a get route with the authentication
router.get('/',authorization,(req,res) => {
    //get the data
    //serialization
    //render with appropriate view file
})

//render specific travelpost 

// router.get('/', authorization, (req,res) => {
//     //
// })