const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  position: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  column_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tag_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: 'tasks',
})

module.exports = Task;
