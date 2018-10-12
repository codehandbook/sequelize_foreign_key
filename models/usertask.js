'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserTask = sequelize.define('UserTask', {
  		userId: DataTypes.INTEGER,
    	taskId: DataTypes.INTEGER
  }, {});

  UserTask.associate = function(models) {
    UserTask.hasMany(models.Task, {
      	foreignKey : 'id',
      	sourceKey: 'taskId'
    });
    UserTask.hasMany(models.User, {
   		foreignKey : 'id',
    	sourceKey: 'userId'
    })
  };
  return UserTask;
};