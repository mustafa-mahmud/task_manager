class CustomError extends Error {
  constructor(msg, statusCode) {
    super(msg);

    this.statusCode = statusCode;
  }
}

const createCustomError = (msg, codes) => {
  return new CustomError(msg, codes);
};

module.exports = { createCustomError, CustomError };
