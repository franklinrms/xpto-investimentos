const express = require('express');
const rescue = require('express-rescue');

const routes = express.Router();

const { createNewUser, login, updateUserData } = require('./controllers/userController');

routes.post('/user', rescue(createNewUser));
routes.put('/user', rescue(updateUserData));

routes.get('/login', rescue(login));

module.exports = routes;  