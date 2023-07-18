const Sequelize = require('sequelize');
const router = require('express').Router();
const {  User,Comment, Like } = require('../../models');
 

// add comment
router.post('/post/:id',async (req,res) =>{
    try{
      const commentData = await Comment.create({
        user_id:req.session.userID,
        comment:req.body.comment,
        post_id: req.params.id

    });
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

router.put('/post/:id', async (req,res)=>{
    const updatedLike = Like.update({
        count : count++
      },{
      where: {
        post_id: req.params.id
      }
      });
    res.status(200).json(updatedLike);
    
})

module.exports = router;