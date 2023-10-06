const express = require('express');
const mainController = require('../controllers/index');

const router = express.Router();

router.get('/', mainController.getAll);

router.use('/contacts', require('./contacts'))

module.exports = router;