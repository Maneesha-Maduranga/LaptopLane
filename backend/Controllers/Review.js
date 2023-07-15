const { Laptop } = require('../Model/Laptop');
const { Review } = require('../Model/Review');
const CustomError = require('../Utiils/customError');
const { authorization } = require('../middleware/security');

const getAllReviews = async (req, res) => {
  const reviews = await Review.find({});

  res.status(200).json({
    sucess: true,
    data: reviews,
  });
};

const getSingleReview = async (req, res) => {
  const { id } = req.params;
  const review = await Review.findById({ _id: id });
  if (!review) {
    throw new CustomError('No Review Found With Given ID', 404);
  }
  res.status(200).json({
    sucess: true,
    data: review,
  });
};

const createReviews = async (req, res) => {
  const { laptopId, rating, description } = req.body;
  let laptop = await Laptop.findById({ _id: laptopId });
  if (!laptop) {
    throw new CustomError('No Laptop Found for the Review', 404);
  }
  let commentedBefore = await Review.findOne({
    laptop: laptopId,
    user: req.user.id,
  });

  if (commentedBefore) {
    throw new CustomError('Already Reviewd', 400);
  }

  let review = await Review.create({
    rating,
    description,
    laptop: laptopId,
    user: req.user.id,
  });

  res.status(201).json({
    sucess: true,
    data: review,
  });
};

const updateReview = async (req, res) => {
  const { id } = req.params;
  let review = await Review.findById({ _id: id });
  if (!review) {
    throw new CustomError('No Review Found With Given ID', 404);
  }
  authorization(req.user, review.user);

  (review.rating = req.body.rating),
    (review.description = req.body.description);

  review = await review.save();

  res.status(200).json({
    sucess: true,
    data: review,
  });
};

const deleteReview = async (req, res) => {
  const { id } = req.params;
  const review = await Review.findById({ _id: id });
  if (!review) {
    throw new CustomError('No Review Found With Given ID', 404);
  }
  authorization(req.user, review.user);

  await review.deleteOne();

  res.status(200).json({
    sucess: true,
    data: 'Review Removed',
  });
};

module.exports = {
  getAllReviews,
  getSingleReview,
  createReviews,
  updateReview,
  deleteReview,
};
