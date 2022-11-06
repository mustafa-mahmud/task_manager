const { CustomError } = require('./../error/CustomError');

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  return res.status(500).json({ msg: 'Something went wrong, pls try again' });
};

module.exports = errorHandler;
