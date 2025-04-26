const express = require('express');
const router = express.Router();
const columnRoutes = require('./column.routes');
const tagRoutes = require('./tag.routes');
const taskRoutes = require('./task.routes');
const taskHistoryRoutes = require('./taskHistory.routes');

router.use('/columns', columnRoutes);
router.use('/tags', tagRoutes);
router.use('/tasks', taskRoutes);
router.use('/task-histories', taskHistoryRoutes);

module.exports = router;
