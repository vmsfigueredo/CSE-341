const routes = require('express').Router();
const controller = require('../controllers');
const contactRoutes = require('./contactRoutes');

routes.get('/', controller.displayName);

/*  Contacts API */

routes.use('/contact', contactRoutes);

module.exports = routes;
