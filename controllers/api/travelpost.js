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
    console.log(travelpost);
})

//delete TravelPost delete route on homepage

router.delete('/:id', async(req,res) =>{
    try{

        const travelPost = await TravelPost.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!travelPost) {
            res.status(404).json({ message: 'Category with given ID doesnt exist ' });
        } else {
            res.status(200).json(travelPost);
        }
    } catch (err) {
        res.status(500).json(err);
    }

})

module.exports = router;