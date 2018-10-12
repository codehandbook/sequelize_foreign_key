'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      id: 1,
      firstName: 'Jay',
      lastName: 'Raj',
      email: 'jay3dec@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 2,
      firstName: 'Roy',
      lastName: 'Agasthyan',
      email: 'royagasthyan@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 3,
      firstName: 'Jack',
      lastName: 'Samuel',
      email: 'jacksamuel@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
