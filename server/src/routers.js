const express = require('express');
const rescue = require('express-rescue');

const routes = express.Router();

const { createNewUser, login } = require('./controllers/userController');

routes.post('/user', rescue(createNewUser));

routes.get('/login', rescue(login));

module.exports = routes;  