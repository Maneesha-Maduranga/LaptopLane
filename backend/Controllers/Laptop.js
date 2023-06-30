// Dummy Laptop Data
const { Laptops } = require('../data/Laptops');

const getAllLaptop = async (req, res) => {
  res.send(Laptops);
};

const getSingleLaptop = async (req, res) => {
  const { id } = req.params;
  const laptop = Laptops.filter((lap) => lap.id == Number(id));
  res.send(laptop);
};

module.exports = {
  getAllLaptop,
  getSingleLaptop,
};
