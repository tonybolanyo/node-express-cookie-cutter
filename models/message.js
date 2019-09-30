'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Message.associate = function(models) {
    // associations can be defined here
  };
  return Message;
};