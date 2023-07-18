const Sequelize = require('sequelize');
const router = require('express').Router();
const {  User,Comment, Like } = require('../../models');
 
// /api/comment-like/
// add comment
router.post('/post/:id',async (req,res) =>{
    try{
      const currentDate = new Date();
      const commentData = await Comment.create({
        user_id:req.session.userID,
        comment:req.body.comment,
        post_id: req.params.id,
        date: currentDate

    });
    console.log(commentData);
    res.status(200).json(commentData);
  }catch(err){
    res.status(500).json(err)
  }
})
// delete comment
router.delete('/post/:id',async(req,res)=>{
  try{
    const commentToDelete = await Comment.destroy({
      where:{ 
        
      }
    })
  }catch(err){
    res.status(500).json(err);
  }
})

//add like (PUT)

router.put('/post/:id/like', async (req, res) => {
  try {
   
    const existingLike = await Like.findOne({
      where: {
        user_id: req.session.userID,
        post_id: req.params.id
      }
    });

    if (existingLike) {
   
      await existingLike.destroy();
      res.status(200).json({ message: 'Like removed successfully.' });
    } else {
    
      const newLike = await Like.create({
        user_id: req.session.userID,
        post_id: req.params.id
      });
      res.status(200).json({ message: 'Post liked successfully.', like: newLike });
    }
  } catch (err) {
    console.error('Error liking post:', err);
  }
});

module.exports = router;