const { Column, Task, Tag } = require('../models');

exports.getColumns = async (req, res) => {
  try {
    const columns = await Column.findAll({
      order: [['position', 'ASC']],
      include: [{
        model: Task,
        attributes: ['id', 'title', 'description', 'position'],
        order: [['position', 'ASC']],
        include: [{
          model: Tag,
          attributes: ['id', 'name']
        }],
      }],
    });

    res.json(columns);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get columns', error: error.message });
  }
};
