const notFound = (err, res, next) => {
  const h1 = `<h1>404, Page not found</h1>`;

  res.status(404).send(h1);
};

module.exports = notFound;
