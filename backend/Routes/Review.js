const express = require('express');
const router = express.Router();

const {
  getAllReviews,
  getSingleReview,
  createReviews,
  updateReview,
  deleteReview,
} = require('../Controllers/Review');

const { authentication } = require('../middleware/security');

router.get('/', getAllReviews);

router.get('/:id', getSingleReview);

router.post('/', authentication, createReviews);

router.patch('/:id', authentication, updateReview);

router.delete('/:id', authentication, deleteReview);

module.exports = router;
