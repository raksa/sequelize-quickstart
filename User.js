'use strict'

const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

class User extends Model { }
User.init(
    {
        // attributes
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING
            // allowNull defaults to true
        }
    }, {
        sequelize,
        modelName: 'user'
        // options
    }
);
module.exports = User;