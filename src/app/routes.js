const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController');

routes.get('/', UserController.index);
routes.get('/details/:id', UserController.detail);
routes.post('/users', UserController.store);
routes.delete('/users/:id', UserController.delete)

module.exports = routes;