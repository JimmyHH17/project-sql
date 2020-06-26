'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserLogin = sequelize.define('UserLogin', {
    UserName: DataTypes.STRING,
    Password: DataTypes.STRING
  }, {});
  UserLogin.associate = function(models) {
    // associations can be defined here
  };
  return UserLogin;
};