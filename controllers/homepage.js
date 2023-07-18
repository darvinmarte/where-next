const router = require('express').Router();
const {User, Comment, Like, TravelPost} = require('../models');
const authorization = require('../utils/auth');


//render all travelposts with a get route with the authentication
//authorization
router.get('/',authorization, async (req,res) => {
    //get the data
    try{
        const travelPostsData = await TravelPost.findAll({
            include:[
                {
                    model: User,
                    model: Like,
                }
            ]
        });
        //serialization
        const travelPosts = travelPostsData.map( (travelpost) => travelpost.get({plain: true}));
        console.log(travelPosts);
        //render with appropriate view file // send loggedIN
        res.render('homepage',{travelPosts, loggedIn: req.session.loggedIn})

    }catch(err){
        console.error(err);
    }
});

//render specific travelpost 
//authorization
router.get('/post/:id',authorization, async (req,res) => {
   try  {
    //get the data of the travelpost with likes and comments
    const travelpostData = await TravelPost.findByPk(req.params.id, {
        include :[ 
            {
                model: User,
                model: Comment,
                model: Like,
            }
        ]
    });
    //serialization
    const post = travelpostData.get({plain: true});
    console.log(post);
    //render to the appropriate view
       res.render('individualPost', { post, loggedIn: req.session.loggedIn }); 
}catch (err) {
    console.error(err);
}
});

//login route 
router.get('/login', async (req,res)=> {
    try{
    res.render('login');
    }catch(err){
        console.error(err);
    }
});

//sign up route

router.get('/signup', async (req,res) =>{
    try{
        res.render('signUp');
    }catch(err){
        console.error(err);
    }
})


module.exports = router;