const { Laptop } = require('../Model/Laptop');
const { Order } = require('../Model/Order');
const CustomError = require('../Utiils/customError');
const { authorization } = require('../middleware/security');

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
    throw new CustomError('No Order Found With Given Id');
  }
  authorization(req.user, order.user);
  res.status(200).json({
    sucess: true,
    data: order,
  });
};

const getUserOrders = async (req, res) => {
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
    clientSecret: 'sss',
    amount: amount,
    total: total,
  });

  res.status(201).json({
    sucess: true,
    data: order,
  });
};

const create_PaymentIntent = async (req, res) => {
  const { amount } = req.body;

  const stripe = require('stripe')(process.env.STRIPESECREAT);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    },
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

const updateOrders = async (req, res) => {
  res.send('Update Orders');
};

module.exports = {
  getAllOrders,
  getSingleOrders,
  getUserOrders,
  createOrder,
  updateOrders,
  create_PaymentIntent,
};
