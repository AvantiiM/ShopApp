const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
//   userID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   productID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Product',
//     required: true
//   },
  rating: {
    type: Number,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  reviewDate: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Review', reviewSchema, 'Reviews');
