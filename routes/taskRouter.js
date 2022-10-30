const express = require('express');
const { getAllUsers, createUser } = require('./../controller/TaskController');

const Router = express.Router();

Router.route('/').get(getAllUsers).post(createUser);

module.exports = Router;
