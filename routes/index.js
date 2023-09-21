const routes = require('express').Router();
const mainController = require('../controllers');
 
routes.get('/', mainController.route)
routes.get('/person2', mainController.person2)

module.exports = routes;