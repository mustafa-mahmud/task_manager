const express = require('express');
const {
  getAllUsers,
  createUser,
  getSingleUser,
  deleteUser,
  updateUser,
} = require('./../controller/TaskController');

const Router = express.Router();

Router.route('/').get(getAllUsers).post(createUser);
Router.route('/:id').get(getSingleUser).delete(deleteUser).patch(updateUser);

module.exports = Router;
