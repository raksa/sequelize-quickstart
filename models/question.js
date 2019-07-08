'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    text: DataTypes.STRING
  }, { tableName: 'questions' });
  Question.associate = function (models) {
    Question.hasMany(models.Answer);
  };
  return Question;
};