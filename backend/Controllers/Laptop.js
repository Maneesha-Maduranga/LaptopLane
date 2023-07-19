const path = require('path');
//Models
const { Laptop } = require('../Model/Laptop');
//Helpers
const CustomError = require('../Utiils/customError');

const getAllLaptop = async (req, res) => {
  const { search, brand, catergory, processor, ram, sort, price } = req.query;

  let quearyOption = {};

  if (search) {
    quearyOption.name = new RegExp(search, 'i');
  }
  if (price) {
    quearyOption.price = price;
  }
  if (brand) {
    quearyOption.brand = new RegExp(brand, 'i');
  }
  if (catergory) {
    quearyOption.catergory = new RegExp(catergory, 'i');
  }
  if (processor) {
    quearyOption.processor = new RegExp(processor, 'i');
  }
  if (ram) {
    quearyOption.ram = new RegExp(ram, 'i');
  }

  let result = Laptop.find(quearyOption);

  if (sort == 'lowtoHigh') {
    result = result.sort('price');
  }
  if (sort == 'HightoLow') {
    result = result.sort('-price');
  }

  //Pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 9;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const laptops = await result;

  const allLaptops = await Laptop.countDocuments(quearyOption);
  const pages = Math.ceil(allLaptops / limit);

  res.status(200).json({
    sucess: true,
    data: laptops,
    count: allLaptops,
    pages: pages,
  });
};

const getDiscountLaptops = async (req, res) => {
  const laptops = await Laptop.find({ 'discount.discountItem': 'yes' });
  if (!laptops) {
    throw new CustomError('No Laptops Found With Discount', 404);
  }

  res.status(200).json({
    sucess: true,
    data: laptops,
  });
};

const getSingleLaptop = async (req, res) => {
  const { id } = req.params;

  const laptop = await Laptop.findById(id).populate('reviews');

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
    warranty,
    displaytype,
    resolution,
    size,
    os,
    model,
    colours,
    stock,
    description,
    catergory,
    discountItem,
    discountPrice,
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
    warranty: warranty,
    display: { displaytype: displaytype, resolution: resolution, size: size },
    general: { os: os, model: model, colours: colours },
    discount: {
      discountItem: discountItem,
      discountPrice: discountPrice ? Number(discountPrice) : 0,
    },
    stock: Number(stock),
    description: description,
    catergory: catergory,
    user: req.user.id,
  });

  res.status(200).json({
    sucess: true,
    data: laptop,
  });
};

const deleteLaptop = async (req, res) => {
  const { id } = req.params;

  let laptop = await Laptop.findById({ _id: id });

  if (!laptop) {
    throw new CustomError('No Laptop found With Given Id', 404);
  }

  await laptop.deleteOne();

  res.status(200).json({
    sucess: true,
    data: 'Product Deleted',
  });
};

const uploadImageLaptop = async (req, res) => {
  let image;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    throw new CustomError('Please Upload File', 400);
  }

  image = req.files.image;

  if (!image.mimetype.startsWith('image')) {
    throw new CustomError('Please Upload Image', 400);
  }

  uploadPath = path.join(__dirname, '../public/images/' + `${image.name}`);

  await image.mv(uploadPath);

  res.status(201).json({
    sucess: true,
    image: `/images/${image.name}`,
  });
};

module.exports = {
  getAllLaptop,
  getSingleLaptop,
  getDiscountLaptops,
  createLaptop,
  deleteLaptop,
  uploadImageLaptop,
};
