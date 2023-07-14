const Sequelize = require('sequelize');
const router = require('express').Router();
const {  User,Comment, Like } = require('../../models');
 

// add comment
router.post('/post/:id',async (req,res) =>{
    const commentData = await Comment.create({
        user_id:req.session.userID,
        comment:req.body.comment,
        post_id: req.params.id

    });
    // res.redirect('/post/:id');
    location.reload();
})
// delete comment

//add like (PUT)

router.put('/post/:id', async (req,res)=>{
    const updatedLike = Like.update({
        count : count++
      },{
      where: {
        post_id: req.params.id
      }
      });
    res.json(updatedLike);
    
     location.reload();
})

module.exports = router;