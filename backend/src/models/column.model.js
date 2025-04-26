const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Column = sequelize.define('Column', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  position: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'columns',
})

module.exports = Column;
