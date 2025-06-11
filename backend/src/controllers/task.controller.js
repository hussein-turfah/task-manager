const { Task, TaskHistory, Tag } = require("../models");


exports.createTask = async (req, res) => {
  try {
    const { title, description, column_id, tag_id, other_tag } = req.body;

    let new_tag_id;
    if (other_tag && other_tag !== "" && tag_id === "other") {
      const tag = await Tag.create({ name: other_tag });
      new_tag_id = tag.id;
    }

    const task = await Task.create({
      title,
      description,
      column_id,
      tag_id: new_tag_id || tag_id,
      position: 0
    });

    await TaskHistory.create({
      task_id: task.id,
      new_column_id: column_id,
      action: 'created in'
    });

    res.status(201).json(task);
  } catch (error) {
    console.log(error);
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
    if (column_id.toString() === old_column_id.toString()) {
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
    console.log(error);
    res.status(500).json({ message: 'Failed to move task', error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.destroy({ where: { id } });
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete task', error: error.message });
  }
};
