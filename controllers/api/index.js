const router = require('express').Router();
const userRoutes = require('./user-routes');
const travelpost = require('./travelpost');
const comentlike = require('./comment-like');

router.use('/users', userRoutes);
router.use('/comment-like', comentlike);
router.use('/travelpost',travelpost);
module.exports = router;
