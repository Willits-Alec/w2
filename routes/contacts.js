const express = require('express');
const router = express.Router();

const mainController = require('../controllers/index');

router.get('/', mainController.getContacts);
router.get('/', mainController.getAll);
router.get('/', mainController.getSingle);

router.get('/:id', mainController.getSingle);

module.exports = router;

