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
    return queryInterface.bulkInsert('Tasks', [{
      id: 1,
      taskName: 'Buy grocery',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 2,
      taskName: 'Pick children',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 3,
      taskName: 'Pay electricity bill',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 4,
      taskName: 'Go to GYM',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 5,
      taskName: 'Paint the house',
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
