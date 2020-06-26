'use strict';
module.exports = (sequelize, DataTypes) => {
  const adminLogin = sequelize.define('adminLogin', {
    UserName: DataTypes.STRING,
    Password: DataTypes.STRING
  }, {});
  adminLogin.associate = function(models) {
    // associations can be defined here
  };
  return adminLogin;
};