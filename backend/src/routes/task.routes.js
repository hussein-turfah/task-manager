const express = require('express');
const router = express.Router();
const { createTask, moveTask, deleteTask } = require('../controllers/task.controller');

router
  .route('/')
  .post(createTask)

router
  .route('/:id/move')
  .put(moveTask);

router
  .route('/:id')
  .delete(deleteTask)

module.exports = router;
