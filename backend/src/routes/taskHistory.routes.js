const express = require('express');
const router = express.Router();
const { getAllTaskHistories } = require('../controllers/taskHistory.controller');

router
  .route('/')
  .get(getAllTaskHistories);

module.exports = router;
