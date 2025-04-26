const { Tag } = require('../models');

exports.createTag = async (req, res) => {
  try {
    const { name } = req.body;
    const existingTag = await Tag.findOne({ where: { name } });
    if (existingTag) {
      return res.status(400).json({ message: 'Tag already exists' });
    }
  
    const tag = await Tag.create({ name });

    res.status(201).json(tag);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create tag', error: error.message });
  }
};

exports.getTags = async (req, res) => {
  try {
    const tags = await Tag.findAll({
      order: [['name', 'ASC']],
    })
    res.json(tags);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get tags', error: error.message });
  }
};

