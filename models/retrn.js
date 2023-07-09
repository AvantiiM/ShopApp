const mongoose = require('mongoose');

const retrnSchema = new mongoose.Schema({
//   orderID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Order',
//     required: true
//   },
  reason: {
    type: String,
    required: true
  },
  returnDate: {
    type: Date,
    required: true
  },
  refundStatus: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Retrn', retrnSchema, 'Returns');
