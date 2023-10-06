const express = require('express');
const router = express.Router();
const mainController = require('../controllers/index');

router.get('/:id', mainController.getSingle);

module.exports = router;

