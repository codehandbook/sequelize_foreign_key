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
    return queryInterface.bulkInsert('UserTasks', [{
      userId: 1,
      taskId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 2,
      taskId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 3,
      taskId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      taskId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 2,
      taskId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
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
