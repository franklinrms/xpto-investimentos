const express = require('express');
const rescue = require('express-rescue');

const routes = express.Router();

const { createNewUser } = require('./controllers/userController');

routes.post('/user', rescue(createNewUser));

module.exports = routes;  