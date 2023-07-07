const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      min: [1, 'Rating Must be Greater Than 0'],
      max: [10, 'Rating Must be less Than 10'],
      required: [true, 'Rating Is Required'],
    },
    description: {
      type: String,
      required: [true, 'Description Is Required'],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User Is Required'],
    },
    laptop: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Laptop',
      required: [true, 'Laptop Product Is Required'],
    },
  },
  { timestamps: true }
);

const Review = mongoose.model('Review', ReviewSchema);

module.exports = {
  Review,
};
