'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    FirstName: DataTypes.STRING,
    UserName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Email: DataTypes.STRING,
    Password: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};