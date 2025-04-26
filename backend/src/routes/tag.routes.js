const express = require('express');
const router = express.Router();
const { createTag, getTags } = require('../controllers/tag.controller');

router
  .route('/')
  .post(createTag)
  .get(getTags);

module.exports = router;

