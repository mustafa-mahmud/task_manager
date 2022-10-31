const taskModel = require('./../models/taskModel');

const getAllUsers = async (req, res) => {
  try {
    const users = await taskModel.find({});
    console.log(users);

    if (!users.length) {
      return res
        .status(404)
        .json({ msg: `Here is no users, Pls add some before` });
    }

    res.status(200).json({ users });
  } catch (err) {
    console.log(err);
  }
};

const createUser = async (req, res) => {
  try {
    const { name, completed } = req.body;

    const user = await taskModel.create({ name, completed });

    res.send('create user');
  } catch (err) {
    // console.log(err);
    res.send('you have some error, pls fix it');
  }
};

const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await taskModel.find({ _id: id });

    console.log(user);

    if (!user.length) {
      return res.status(404).json({ msg: `User not found with ID: ${id}` });
    }

    res.status(200).json({ user });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAllUsers, createUser, getSingleUser };
