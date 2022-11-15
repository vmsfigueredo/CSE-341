const contactRoutes = require('express').Router();
const contactController = require('../controllers/contactController');

/*  Contacts API */
contactRoutes.post('/', contactController.create);
contactRoutes.get('/', contactController.get);
contactRoutes.get('/:id', contactController.show);
contactRoutes.put('/:id', contactController.update);
contactRoutes.delete('/:id', contactController.delete);
module.exports = contactRoutes;
