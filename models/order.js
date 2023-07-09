const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
//   userID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
  orderDate: {
    type: Date,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  orderStatus: {
    type: String,
    required: true
  },
  shippingAddress: {
    type: String,
    required: true
  },
  deliveryStatus: {
    type: String,
    required: true
  },
  paymentAddress: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Order', orderSchema, 'Orders');
