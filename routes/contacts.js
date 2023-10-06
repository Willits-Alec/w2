const express = require('express');
const router = express.Router();
const mainController = require('../controllers/index');
const Contact = require('../models/contact');

router.get('/:id', mainController.getSingle);

module.exports = router;

