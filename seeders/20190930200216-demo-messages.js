'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert("Messages", [
     {
       UserId: 1,
       title: 'You have a new message',
       text: 'Nothing new to see here.',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       UserId: 1,
       title: 'Another sample message',
       text: 'No text here.',
       createdAt: new Date(),
       updatedAt: new Date()
     }
   ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete("Messages", null, {});
  }
};
