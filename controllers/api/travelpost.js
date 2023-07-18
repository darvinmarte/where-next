const Sequelize = require('sequelize');
const router = require('express').Router();
const { User, TravelPost } = require('../../models');

// api/travelpost/
//create travelPost post route on the homepage

router.post('/', async (req,res)=>{
    const currentDate = new Date();
    const travelpost = await TravelPost.create({
        title: req.body.title,
        content: req.body.caption,
        location:req.body.location,
        image: req.body.img,
        user_id: req.session.userID,
        date: currentDate
    });
    res.status(200).json(travelpost);
})

//delete TravelPost delete route on homepage

module.exports = router;