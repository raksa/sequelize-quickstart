'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('answers', [{
      text: 'raksa',
      questionId: 1,
    }, {
      text: 'dara',
      questionId: 1,
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('answers', null, {});
  }
};
