'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.belongsTo(models.UserTask, {
      foreignKey : 'id',
      targetKey: 'userId'
    });
  };
  return User;
};