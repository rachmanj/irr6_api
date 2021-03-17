const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema({
  supplierName: {
    type: String,
    required: true,
  },
  sapCode: {
    type: String,
    required: true,
    unique: true,
  },
  branch: {
    
  }
  paymentPlace: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Supplier', SupplierSchema);
