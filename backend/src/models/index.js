const Column = require('./column.model');
const Task = require('./task.model');
const Tag = require('./tag.model');
const TaskHistory = require('./taskHistory.model');

Column.hasMany(Task, { foreignKey: 'column_id' });
Task.belongsTo(Column, { foreignKey: 'column_id' });

Tag.hasMany(Task, { foreignKey: 'tag_id' });
Task.belongsTo(Tag, { foreignKey: 'tag_id' });

Task.hasMany(TaskHistory, { foreignKey: 'task_id' });
TaskHistory.belongsTo(Task, { foreignKey: 'task_id' });

module.exports = {
  Column,
  Task,
  Tag,
  TaskHistory
};

