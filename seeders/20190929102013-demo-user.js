"use strict";

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
    return queryInterface.bulkInsert("Users", [
      {
        username: "geffertz",
        password: "secret",
        firstName: "Garth",
        lastName: "Effertz",
        email: "Garth.Effertz@luisa.info",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "klang",
        password: "secret",
        firstName: "Kyla",
        lastName: "Lang",
        email: "orangewolf78@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "mbailey",
        password: "secret",
        firstName: "Maximus",
        lastName: "Bailey",
        email: "Maximus.Bailey@orpha.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "aritchie",
        password: "secret",
        firstName: "Alexie",
        lastName: "Ritchie",
        email: "Alexie.Ritchie@raphaelle.net",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "cwilkinson",
        password: "secret",
        firstName: "Carleton",
        lastName: "Wilkinson",
        email: "Carleton.Wilkinson@hannah.org",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Users", null, {});
  }
};
