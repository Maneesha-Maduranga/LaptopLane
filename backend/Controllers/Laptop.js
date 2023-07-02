const { Laptop } = require('../Model/Laptop');
const CustomError = require('../Utiils/customError');

const getAllLaptop = async (req, res) => {
  const laptops = await Laptop.find({});
  res.status(200).json({
    sucess: true,
    data: laptops,
  });
};

const getSingleLaptop = async (req, res) => {
  const { id } = req.params;

  const laptop = await Laptop.findById(id);

  if (!laptop) {
    throw new CustomError('No Laptop Found With Given ID', 404);
  }

  res.status(200).json({
    sucess: true,
    data: laptop,
  });
};

const createLaptop = async (req, res) => {
  const {
    name,
    price,
    image,
    brand,
    processor,
    ram,
    ramType,
    ramSpeed,
    capacity,
    storage,
    battery,
    graphics,
    warrenty,
    displaytype,
    resolution,
    size,
    os,
    model,
    colours,
    stock,
    description,
    reviews,
  } = req.body;

  let laptop = await Laptop.create({
    name: name,
    price: Number(price),
    image: image,
    brand: brand,
    processor: processor,
    ram: ram,
    memory: { ramType: ramType, ramSpeed: ramSpeed, capacity: capacity },
    storage: storage,
    battery: battery,
    graphics: graphics,
    warrenty: warrenty,
    display: { displaytype: displaytype, resolution: resolution, size: size },
    general: { os: os, model: model, colours: colours },
    stock: Number(stock),
    description: description,
    reviews: reviews,
    user: req.user.id,
  });

  res.status(200).json({
    sucess: true,
    data: laptop,
  });
};

const updateLaptop = async (req, res) => {
  res.status(200).json({
    sucess: true,
    data: 'Update Laptop',
  });
};

const deleteLaptop = async (req, res) => {
  res.status(200).json({
    sucess: true,
    data: 'Delete Laptop',
  });
};

const uploadImageLaptop = async (req, res) => {
  res.status(200).json({
    sucess: true,
    data: 'Uplaod image Laptop',
  });
};

module.exports = {
  getAllLaptop,
  getSingleLaptop,
  createLaptop,
  updateLaptop,
  deleteLaptop,
  uploadImageLaptop,
};
