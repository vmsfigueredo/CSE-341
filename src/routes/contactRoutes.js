const contactRoutes = require('express').Router();
const contactController = require('../controllers/contactController');

/*  Contacts API */
/**
 * @swagger
 * /contacts:
 *  post:
 *    description: Use to create a new contact
 *    parameters:
 *      - in: body
 *        name: contact,
 *        description: The contact to create.
 *        schema:
 *          type: object
 *          required:
 *              - firstName
 *              - lastName
 *              - favoriteColor
 *              - birthday
 *          properties:
 *              firstName:
 *                  type: string
 *              lastName:
 *                  type: string
 *              favoriteColor:
 *                  type: string
 *              birthday:
 *                  type: string
 *    responses:
 *     '200':
 *       description: Contact created successfully
 *     '422':
 *       description: Required field not found.
 *
 */
contactRoutes.post('/', contactController.create);
/**
 * @swagger
 * /contacts:
 *  get:
 *    description: Use to request all contacts
 *    responses:
 *      '200':
 *        description: A successful response with all contacts
 *
 */
contactRoutes.get('/', contactController.get);
/**
 * @swagger
 * /contacts/{id}:
 *  get:
 *    description: Use to request specific contact by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *    responses:
 *      '200':
 *          description: A successful response with the contact
 *      '404':
 *          description: Contact not found
 *      '500':
 *          description: ID is not a valid ObjectId
 *
 */
contactRoutes.get('/:id', contactController.show);
/**
 * @swagger
 * /contacts/{id}:
 *  put:
 *    description: Use to update a contact
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *          required: true
 *      - in: body
 *        name: contact,
 *        description: The contact to create.
 *        schema:
 *          type: object
 *          required:
 *              - firstName
 *              - lastName
 *              - favoriteColor
 *              - birthday
 *          properties:
 *              firstName:
 *                  type: string
 *              lastName:
 *                  type: string
 *              favoriteColor:
 *                  type: string
 *              birthday:
 *                  type: string
 *    responses:
 *     '204':
 *       description: Contact updated successfully
 *     '404':
 *       description: Contact not found.
 *     '500':
 *       description: Not valid ID inserted.
 *
 */
contactRoutes.put('/:id', contactController.update);
/**
 * @swagger
 * /contacts/{id}:
 *  delete:
 *    description: Use to delete contact from DB
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *    responses:
 *      '200':
 *          description: A successful response with the contact
 *      '404':
 *          description: Contact not found
 *      '500':
 *          description: ID is not a valid ObjectId
 *
 */

contactRoutes.delete('/:id', contactController.delete);
module.exports = contactRoutes;
