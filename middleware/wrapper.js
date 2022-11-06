const wrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      // res.status(500).json({ error: err.message });
      next(err);
    }
  };
};

module.exports = wrapper;
