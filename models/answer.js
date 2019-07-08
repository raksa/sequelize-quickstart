'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    text: DataTypes.STRING
  }, { tableName: 'answers' });
  Answer.associate = function (models) {
    Answer.belongsTo(models.Question);
  };
  return Answer;
};