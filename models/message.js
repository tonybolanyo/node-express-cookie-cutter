"use strict";
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define(
    "Message",
    {
      title: DataTypes.STRING,
      text: DataTypes.STRING,
    },
    {}
  );

  Message.associate = function(models) {
    // associations can be defined here
    Message.belongsTo(models.User);
  };

  return Message;
};
