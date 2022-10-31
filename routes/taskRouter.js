const express = require('express');
const {
  getAllUsers,
  createUser,
  getSingleUser,
} = require('./../controller/TaskController');

const Router = express.Router();

Router.route('/').get(getAllUsers).post(createUser);
Router.route('/:id').get(getSingleUser);

module.exports = Router;
