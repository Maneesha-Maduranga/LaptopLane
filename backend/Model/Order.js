const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User Is Required'],
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        laptop: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Laptop',
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    subtotal: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'failed', 'paid', 'delivered', 'canceled'],
      default: 'pending',
    },
    paidAt: {
      type: Date,
    },
    clientSecret: {
      type: String,
      required: true,
    },
    paymentIntentId: {
      type: String,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model('User', OrderSchema);

module.exports = {
  Order,
};
