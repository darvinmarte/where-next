const sequelize = require('../config/connection');
const { User,TravelPost } = require('../models');
const postData = require('./postsdata.json')
const userData = require('./usersdata.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    await TravelPost.bulkCreate(postData, {
        individualHooks: true,
        returning: true,}
    )

    process.exit(0);
};

seedDatabase();