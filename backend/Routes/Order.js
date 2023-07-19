const express = require('express');
const router = express.Router();
//Security
const { roleAccess, authentication } = require('../middleware/security');
//Controllers
const {
  getAllOrders,
  getSingleOrders,
  getUserOrders,
  createOrder,
  updateOrders,
  create_PaymentHash,
} = require('../Controllers/Order');

router.get('/', authentication, roleAccess('admin'), getAllOrders);

router.post('/', authentication, createOrder);

router.post('/createPayment', authentication, create_PaymentHash);

router.get('/myOrders', authentication, getUserOrders);

router.get('/:id', authentication, getSingleOrders);

router.patch('/update/:id', authentication, updateOrders);

module.exports = router;
