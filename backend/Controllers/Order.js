const getAllOrders = async (req, res) => {
  res.send('Get ALL Orders');
};

const getSingleOrders = async (req, res) => {
  res.send('Get Single Orders');
};

const getUserOrders = async (req, res) => {
  res.send('Get User  Orders');
};

const createOrder = async (req, res) => {
  res.send('Create Orders');
};

const updateOrders = async (req, res) => {
  res.send('Update Orders');
};

module.exports = {
  getAllOrders,
  getSingleOrders,
  getUserOrders,
  createOrder,
  updateOrders,
};
