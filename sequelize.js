'use strict'

const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://sequelize:sequelize@localhost/sequelize');

module.exports = sequelize;