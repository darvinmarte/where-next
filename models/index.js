const User = require('./user');
const TravelPost = require('./travelpost');
const Comment = require('./comment');
const Like = require('./like');

TravelPost.hasMany(Comment,{
    foreignKey:'post_id',
    onDelete:'CASCADE'
});

Comment.belongsTo(TravelPost, {
    foreignKey: 'post_id'
});


User.hasMany(TravelPost,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
TravelPost.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Comment,{
    foreignKey:'user_id',
    onDelete:'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Like,{
    foreignKey:'user_id',
    onDelete:'CASCADE'
});

Like.belongsTo(User, {
    foreignKey: 'user_id'
});

TravelPost.hasMany(Like,{
    foreignKey:'post_id',
    onDelete:'CASCADE'
});

Like.belongsTo(TravelPost, {
    foreignKey: 'post_id'
});


module.exports = { User, TravelPost, Comment, Like };