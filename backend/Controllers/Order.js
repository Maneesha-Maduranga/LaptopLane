const { Laptop } = require('../Model/Laptop');
const { Order } = require('../Model/Order');
const CustomError = require('../Utiils/customError');
const { authorization } = require('../middleware/security');
const md5 = require('crypto-js/md5');

const getAllOrders = async (req, res) => {
  const orders = await Order.find({});
  res.status(200).json({
    sucess: true,
    data: orders,
  });
};

const getSingleOrders = async (req, res) => {
  const { id } = req.params;
  const order = await Order.findById({ _id: id });
  if (!order) {
    throw new CustomError('No Order Found With Given Id', 404);
  }
  authorization(req.user, order.user);
  res.status(200).json({
    sucess: true,
    data: order,
  });
};

const getUserOrders = async (req, res) => {
  // Todo
  res.send('Get User  Orders');
};

const createOrder = async (req, res) => {
  const { orderItems, shippingAddress, total, amount } = req.body;

  if (!orderItems || orderItems.length < 1) {
    throw new CustomError('Order Items Required', 400);
  }
  if (!shippingAddress) {
    throw new CustomError('Shipping Address Required', 400);
  }
  if (!total || !amount) {
    throw new CustomError('Total and Amount Required', 400);
  }
  let checkTotal = 0;
  for (let item = 0; item < orderItems.length; item++) {
    // console.log(orderItems[item]._id);
    let laptop = await Laptop.findById({ _id: orderItems[item]._id });
    if (!laptop) {
      throw new CustomError(
        `No Laptop ${orderItems[item].name} in the Store`,
        404
      );
    }
    if (laptop.price !== orderItems[item].price) {
      throw new CustomError(
        `Laptop ${orderItems[item].name} Price Not Valid`,
        404
      );
    }
    checkTotal = checkTotal + orderItems[item].price;
  }
  if (total != orderItems.length) {
    throw new CustomError('Total product count Incorrect', 400);
  }

  if (amount !== checkTotal) {
    throw new CustomError('Amount Is Incorrect', 400);
  }

  //Generating Hash Value
  let merchantSecret = process.env.PAYMENTSECREAT;
  let merchantId = process.env.PAYMENTID;
  let orderId = req.user.id.toString();
  let hashedSecret = md5(merchantSecret).toString().toUpperCase();

  let totalPrice = amount;
  const formattedNumber = totalPrice.toString().replaceAll('.', ',');
  const amountFormated = parseFloat(formattedNumber).toLocaleString();

  let currency = 'LKR';
  let hash = md5(
    merchantId + orderId + amountFormated + currency + hashedSecret
  )
    .toString()
    .toUpperCase();

  let order = await Order.create({
    user: req.user.id,
    orderItems: orderItems,
    shippingAddress: {
      address: shippingAddress.address,
      city: shippingAddress.city,
      country: shippingAddress.country,
      postalCode: shippingAddress.postalCode,
      state: shippingAddress.state,
    },
    clientSecret: hash,
    amount: amount,
    orderId: req.user.id.toString(),
    total: total,
  });
  res.status(201).json({
    sucess: true,
    data: order,
  });
};

const updateOrdertoPaid = async (req, res) => {
  const { id } = req.params;
  let order = await Order.findById({ _id: id });
  if (!order) {
    throw new CustomError('No Order Found With Given Id', 404);
  }
  authorization(req.user, order.user);
  order.status = 'paid';
  order.paidAt = new Date().toJSON();
  await order.save();
  res.status(201).json({
    sucess: true,
    data: order,
  });
};

module.exports = {
  getAllOrders,
  getSingleOrders,
  getUserOrders,
  createOrder,
  updateOrdertoPaid,
};
