const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantitySold: {
    type: Number,
    required: true
  },
  reviewAverage: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  joinDate: {
    type: Date,
    required: true
  },
  numProducts: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Seller', sellerSchema, "Sellers");