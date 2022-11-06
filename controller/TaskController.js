const taskModel = require('./../models/taskModel');
const wrapper = require('./../middleware/wrapper');
const { createCustomError } = require('../error/CustomError');

const getAllUsers = wrapper(async (req, res) => {
  const users = await taskModel.find({});

  if (!users.length) {
    return res
      .status(404)
      .json({ msg: `Here is no users, Pls add some before` });
  }

  res.status(200).json({ users });
});

const createUser = wrapper(async (req, res) => {
  const { name, completed } = req.body;

  const user = await taskModel.create({ name, completed });

  res.status(201).json({ msg: 'User created successfully', user });
});

const getSingleUser = wrapper(async (req, res, next) => {
  const { id } = req.params;
  const user = await taskModel.find({ _id: id });

  if (!user.length) {
    /*   const error = new Error('not found');
    error.status = 404;
    return next(error); */
    return next(createCustomError('user not found', 404));
    // throw createCustomError(`Here is no users, Pls add some before`, 404);
  }

  res.status(200).json({ user });
});

const deleteUser = wrapper(async (req, res) => {
  const { id } = req.params;

  const delUser = await taskModel.findByIdAndDelete({ _id: id });

  if (!delUser) {
    throw new Error(`User not found with ID: ${id}`);
  }

  res.status(200).json({ msg: `User ID: ${id} deleted successfully` });
});

const updateUser = wrapper(async (req, res) => {
  const { id } = req.params;
  const user = req.body;

  const newUser = await taskModel.findOneAndUpdate({ _id: id }, user, {
    new: true,
    runValidators: true,
  });

  if (!newUser) {
    throw new Error(`User not found with ID: ${id}`);
  }

  res.status(200).json({ msg: 'User updated successfully' });
});

module.exports = {
  getAllUsers,
  createUser,
  getSingleUser,
  deleteUser,
  updateUser,
};
