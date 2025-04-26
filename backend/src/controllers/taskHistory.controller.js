const { TaskHistory } = require("../models");


exports.getAllTaskHistories = async (req, res) => {
  try {
    const taskHistories = await TaskHistory.findAll();
    res.json(taskHistories);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get task history', error: error.message });
  }
};

