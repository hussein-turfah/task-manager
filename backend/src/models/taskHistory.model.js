const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const TaskHistory = sequelize.define('TaskHistory', {
  task_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  old_column_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  new_column_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  old_position: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  new_position: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  action: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  moved_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  }
}, {
  tableName: 'task_histories'
})

module.exports = TaskHistory;
