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
    catergory: {
      type: String,
      enum: {
        values: ['Gaming', 'Consumer', 'Business'],
      },
      required: [true, 'Catergory  is Required Field'],
    },
    image: {
      type: String,
      default: 'photo',
    },
    brand: {
      type: String,
      enum: {
        values: ['ASUS', 'HP', 'MSI', 'DELL', 'ACER', 'LENEVO', 'GIGABYTE'],
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
    warranty: {
      type: String,
      required: [true, 'Warranty  is Required Field'],
    },
    display: {
      displaytype: { type: String, default: 'IPS' },
      resolution: { type: String, default: 'FHD (1920 x 1080)' },
      size: { type: String, default: '14.” Inches Display' },
    },
    general: {
      os: { type: String, default: 'Windows' },
      model: { type: String },
      colors: { type: String, default: 'Black' },
    },
    stock: {
      type: Number,
      required: [true, 'Stock  is Required Field'],
    },
    discount: {
      discountItem: {
        type: String,
        enum: {
          values: ['yes', 'no'],
        },
        default: 'no',
      },
      discountPrice: { type: Number, default: 0 },
    },
    description: {
      type: String,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User  is Required Field'],
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
LaptopSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'laptop',
});

const Laptop = mongoose.model('Laptop', LaptopSchema);

module.exports = {
  Laptop,
};
