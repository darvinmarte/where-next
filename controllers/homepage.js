const router = require('express').Router();
const Sequelize = require('sequelize');
const {User, Comment, Like, Travelpost} = require('../models');
const authorization = require('../utils/auth');


//render all travelposts with a get route with the authentication
router.get('/',authorization,async (req,res) => {
    //get the data
    try{
        const travelPostsData = await Travelpost.findAll({
            include:[
                {
                    model: User,
                    model: Like
                }
            ]
        });
        //serialization
        const travelPosts = travelPostsData.map( (travelpost) => travelpost.get({plain: true}));
        console.log(travelPosts);
        res.json(travelPosts);
        //render with appropriate view file
        // res.render('', {travelPosts})

    }catch(err){
        console.error(err);
    }
});

//render specific travelpost 

router.get('/post/:id', authorization, async (req,res) => {
   try  {
    //get the data of the travelpost with likes and comments
    const travelpostData = travelpost.findByPk(req.params.id, {
        include :[ 
            {
                model: User,
                model: Like,
                model: Comment 
            }
        ]
    });
    //serialization
    const travelPost = travelpostData.get({plain: true});
    res.json(travelPost);
    //render to the appropriate view
    // res.render('', {travelPost}); 
}catch (err) {
    console.error(err);
}
});

//login route 
router.get('/login', async (req,res)=> {
    try{
    //res.render('login');
    }catch(err){
        console.error(err);
    }
});

//sign up route

router.get('/signup', async (req,res) =>{
    try{
        //res.render('signUp');
    }catch(err){
        console.error(err);
    }
})

module.exports=router