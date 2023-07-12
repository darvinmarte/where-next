const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

travelPost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            // type: 
            allowNull: false,
        },
        date: {
            // type:
            allowNull: false,
        },
        image: {
            // type: DataTypes.STRING,
            // allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'travelPost',
    }
);

module.exports = travelPost;