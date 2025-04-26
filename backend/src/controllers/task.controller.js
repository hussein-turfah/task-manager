const { Task, TaskHistory } = require("../models");


exports.createTask = async (req, res) => {
  try {
    const { title, description, column_id, tag_id, position } = req.body;
    const task = await Task.create({ title, description, column_id, tag_id, position });

    await TaskHistory.create({
      task_id: task.id,
      new_column_id: column_id,
      position,
      action: 'created'
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create task', error: error.message });
  }
};

exports.moveTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { column_id, position } = req.body;

    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    const old_column_id = task.column_id;
    const old_position = task.position;

    await task.update({ column_id, position });

    let action
    if (column_id === old_column_id) {
      if (position > old_position) {
        action = 'moved down';
      } else {
        action = 'moved up';
      }
    } else {
      action = 'moved to';
    }


    await TaskHistory.create({
      task_id: id,
      old_column_id,
      new_column_id: column_id,
      old_position,
      new_position: position,
      action
    });

    res.json({ message: 'Task moved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to move task', error: error.message });
  }
};
