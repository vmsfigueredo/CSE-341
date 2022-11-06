const contactRoutes = require('express').Router();
const contactController = require("../controllers/contactController");

/*  Contacts API */
contactRoutes.post('/', contactController.create);
contactRoutes.get('/', contactController.get);
contactRoutes.get('/:id', contactController.show);

module.exports = contactRoutes;