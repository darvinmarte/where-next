const router = require('express').Router();
const {User, Comment, Like, TravelPost} = require('../models');
const authentication = require('../utils/auth');


//render all travelposts with a get route with the authentication
//authentication
router.get('/',authentication, async (req,res) => {
    //get the data
    try{
        const travelPostsData = await TravelPost.findAll({
            include:[
                {
                    model: User,
                    model: Like,
                }
            ],
            order:[['date','DESC']]
        });
        //serialization
        const travelPosts = travelPostsData.map((travelpost) => {
            const plainTravelPost = travelpost.get({ plain: true });
            plainTravelPost.likeCount = travelpost.likes.length; 
            return plainTravelPost;
        });

        console.log(travelPosts);
        //render with appropriate view file // send loggedIN
        res.render('homepage',{travelPosts, loggedIn: req.session.loggedIn, user: req.session.user})

    }catch(err){
        console.error(err);
    }
});

//render specific travelpost 
//authentication
router.get('/post/:id',authentication, async (req,res) => {
   try  {
    //get the data of the travelpost with likes and comments
    const travelpostData = await TravelPost.findByPk(req.params.id, {
        include :[ 
            {
                model: User,
                model: Like,
            },{
                model: Comment,
                attributes:['comment','date']

            }
        ]
    });
    //serialization
    const post = travelpostData.get({plain: true});
    post.likeCount = travelpostData.likes.length; 
    console.log(post);
    //render to the appropriate view
       res.render('individualPost', { post, loggedIn: req.session.loggedIn, user: req.session.user }); 
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