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
  updateOrdertoPaid,
} = require('../Controllers/Order');

router.get('/', authentication, roleAccess('admin'), getAllOrders);

router.post('/', authentication, createOrder);

router.get('/myOrders', authentication, getUserOrders);

router.get('/:id', authentication, getSingleOrders);

router.patch('/updateToPay/:id', authentication, updateOrdertoPaid);

module.exports = router;
