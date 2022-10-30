const taskModel = require('./../models/taskModel');

const getAllUsers = (req, res) => {
  res.send('get all users');
};

const createUser = async (req, res) => {
  try {
    const { name, completed } = req.body;

    const user = await taskModel.create({ name, completed });
    console.log(user);

    res.send('create user');
  } catch (err) {
    // console.log(err);
    res.send('you have some error, pls fix it');
  }
};

module.exports = { getAllUsers, createUser };
