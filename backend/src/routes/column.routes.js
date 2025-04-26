const express = require('express');
const router = express.Router();
const { getColumns } = require('../controllers/column.controller');

router
  .route('/')
  .get(getColumns);

module.exports = router;
