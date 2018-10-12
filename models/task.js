'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    taskName: DataTypes.STRING
  }, {});
  Task.associate = function(models) {
    Task.belongsTo(models.UserTask, {
      foreignKey : 'id',
      targetKey: 'taskId'
    });
  };
  return Task;
};