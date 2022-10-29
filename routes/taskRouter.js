const express = require('express');
const { getAllUsers } = require('./../controller/TaskController');

const Router = express.Router();

Router.route('/').get(getAllUsers);

module.exports = Router;
