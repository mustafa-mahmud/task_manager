const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [3, 'Name must be 3 chars'],
    maxlength: [15, 'Name must be in 15 chars'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('User', taskSchema);
