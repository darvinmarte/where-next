const user = require('./user');
const travelPost = require('./travelPost');
const comment = require('./comment');
const like = require('./like')


Driver.hasOne(License, {
  foreignKey: 'driver_id',
  onDelete: 'CASCADE',
});

License.belongsTo(Driver, {
  foreignKey: 'driver_id',
});

// Define a Driver as having many Cars, thus creating a foreign key in the `car` table
Driver.hasMany(Car, {
  foreignKey: 'driver_id',
  onDelete: 'CASCADE',
});

// The association can also be created from the Car side
Car.belongsTo(Driver, {
  foreignKey: 'driver_id',
});


module.exports = { user, travelPost, comment, like };