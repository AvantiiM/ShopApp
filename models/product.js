const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  // categoryID: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Category',
  //   required: true
  // },
  price: {
    type: Number,
    required: true
  },
  // sellerID: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Seller',
  //   required: true
  // },
  quantityAvailable: {
    type: Number,
    default: 0
  },
  quantitySold: {
    type: Number,
    default: 0
  },
  reviewAverage: {
    type: Number,
    default: 0
  },
  numOfReviews: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Product', productSchema, 'Products');
