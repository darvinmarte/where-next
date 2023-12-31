const Sequelize = require('sequelize');
const router = require('express').Router();
const { User } = require('../../models');

// api/users/

//signup route
router.post('/signup', async (req,res)=> {
    try{
//get all data from req.body
//create
const userData = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
})

//activate session
req.session.save( ()=>{
    req.session.loggedIn = true;
    //getting the username of the person thats logged in
    req.session.user = userData.username;
    //getting the id of the user
    req.session.userID = userData.id;
    res.status(200).json(userData);
})

    }catch(err){
        console.error(err);
    }
});

//login route
router.post('/login', async (req,res)=> {
    try{
//get data from req.body
const userData = await User.findOne({
    where:{
        email: req.body.email
    }
});
//check if its valid
if(!userData){
    res.status(400).json( {message : 'Incorect email! try again'});
    return;
}
const isPassOk = await userData.checkPassword(req.body.password);
if(!isPassOk){
    res.status(400).json('Incorect pass!');
    return;
}
//activate session
req.session.save( ()=> {
    req.session.loggedIn = true;
    //getting the username of the person thats logged in
    req.session.user = userData.username;
    //getting the id of the user
    req.session.userID = userData.id;
    res.status(200).json({user: userData, message: 'logged in'})
}) 
    }catch(err){
        console.error(err);
    }
});

//logout

router.post('/logout',(req,res)=> {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(200).end();
        });
    } else {
        res.status(404).end();
    }
});


module.exports = router;