const { TaskHistory, Task, Column } = require("../models");


exports.getAllTaskHistories = async (req, res) => {
  try {
    const taskHistories = await TaskHistory.findAll({
      include: [{
        model: Task,
        attributes: ['title'],
        include: [{
          model: Column,
          attributes: ['name'],
        }],
      }],
    });
    res.json(taskHistories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to get task history', error: error.message });
  }
};

