const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Tag = sequelize.define('Tag', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'tags',
})

module.exports = Tag;
