const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Message extends Model {}

Message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    username: {
      type: DataTypes.STRING,
      
      allowNull: false,
  
    },

    message: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },

    time_stamp: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: true,
    },
    
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'message',
  }
);

module.exports = { Message };