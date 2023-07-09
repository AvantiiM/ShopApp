const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  birthdate: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  joinDate: {
    type: Date,
    default: Date.now
  },
  cart: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Product',
    default: []
  },
  wishlist: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Product',
    default: []
  }
});

module.exports = mongoose.model('Member', memberSchema, 'Members');
