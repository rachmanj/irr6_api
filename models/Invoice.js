const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
  invoiceNo: {
    type: String,
    required: [true, 'Invoice Number is required'],
    unique: true,
  },
  invoiceDate: {
    type: Date,
    default: Date.now,
  },
  currency: String,
  amount: Number,
  vat: {
    type: Boolean,
    default: false,
  },
  invoiceType: String,
  project: String,
  supplier: {
    type: String,
    required: true,
  },
  receiveDate: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // user: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: 'User',
  //   required: true,
  // },
});

module.exports = mongoose.model('Invoice', InvoiceSchema);
