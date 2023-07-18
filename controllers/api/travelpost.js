const Sequelize = require('sequelize');
const router = require('express').Router();
const { User, TravelPost } = require('../../models');


//create travelPost post route on the homepage
// do I put in the authorization??
//should we do the add post to a separete view?
router.post('/', async (req,res)=>{
    const travelpost = await TravelPost.create({
        title: req.body.title,
        content: req.body.content,
        location:req.body.location,
        image: req.body.image,
        user_id: req.session.userID
    });
    res.status(200).json(travelpost);
})

//delete TravelPost delete route on homepage

module.exports = router;