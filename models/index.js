const User = require('./user');
const TravelPost = require('./travelPost');
const Comment = require('./comment');
const Like = require('./like');

Comment.belongsTo(TravelPost, {
    foreignKey: 'post_id'
});

TravelPost.hasMany(Comment);

TravelPost.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(TravelPost);

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Comment);

Like.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Like);

Like.belongsTo(TravelPost, {
    foreignKey: 'post_id'
});

TravelPost.hasMany(Like);

module.exports = { User, TravelPost, Comment, Like };