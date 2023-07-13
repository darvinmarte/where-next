const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

like.init(
    {
        like_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        post: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'travelPost',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'like',
    }
);

module.exports = like;