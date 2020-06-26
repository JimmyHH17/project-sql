'use strict';
module.exports = (sequelize, DataTypes) => {
  const admin = sequelize.define('admin', {
    UserName: DataTypes.STRING,
    Email: DataTypes.STRING,
    Password: DataTypes.STRING
  }, {});
  admin.associate = function(models) {
    // associations can be defined here
  };
  return admin;
};