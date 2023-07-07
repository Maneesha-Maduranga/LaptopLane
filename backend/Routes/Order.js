const express = require('express');
const router = express.Router();

const { roleAccess, authentication } = require('../middleware/security');

const {
  getAllOrders,
  getSingleOrders,
  getUserOrders,
  createOrder,
  updateOrders,
} = require('../Controllers/Order');

router.get('/', authentication, roleAccess('admin'), getAllOrders);

router.post('/', authentication, createOrder);

router.get('/myOrders', authentication, getUserOrders);

router.get('/:id', authentication, getSingleOrders);

router.patch('/update/:id', authentication, updateOrders);

module.exports = router;
