const mongoose = require('mongoose');

const LaptopSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Laptop Name is Required'],
    },
    price: {
      type: Number,
      required: [true, 'Laptop Price is Required'],
    },
    image: {
      type: String,
      default: 'photo',
    },
    brand: {
      type: String,
      enum: {
        values: ['ASUS', 'HP', 'MSI', 'ACER', 'LENEVO', 'GIGABYTE'],
        message: '{VALUE} is not supported',
      },
      required: true,
    },
    processor: {
      type: String,
      required: [true, 'Processor  is Required Field'],
    },
    ram: {
      type: String,
      required: [true, 'Ram  is Required Field'],
    },
    memory: {
      ramType: { type: String },
      ramSpeed: { type: String },
      capacity: { type: String },
    },
    storage: {
      type: String,
      required: [true, 'Storage  is Required Field'],
    },
    battery: {
      type: String,
      required: [true, 'Battery  is Required Field'],
    },
    graphics: {
      type: String,
      required: [true, 'Graphics  is Required Field'],
    },
    warrenty: {
      type: String,
      required: [true, 'Warrenty  is Required Field'],
    },
    display: {
      displaytype: { type: String },
      resolution: { type: String },
      size: { type: String },
    },
    general: {
      os: { type: String },
      model: { type: String },
      colors: { type: String },
    },
    stock: {
      type: Number,
      required: [true, 'Stock  is Required Field'],
    },
    description: {
      type: String,
    },
    reviews: {
      type: Number,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User  is Required Field'],
    },
  },
  { timestamps: true }
);

const Laptop = mongoose.model('Laptop', LaptopSchema);

module.exports = {
  Laptop,
};
