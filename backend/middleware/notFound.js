const notFound = (req, res) => {
  res.send('Route Doesnot Exist');
};

module.exports = {
  notFound,
};
