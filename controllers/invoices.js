const Invoice = require('../models/Invoice');

// @desc    Get all invoices
// @route   GET /api/v1/invoices
// @access  private
exports.getInvoices = async (req, res) => {
  const invoices = await Invoice.find({});

  res.status(200).json({
    success: true,
    data: invoices,
  });
};

// @desc    Get single invoice
// @route   GET /api/v1/invoices/:id
// @access  private
exports.getInvoice = (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Show single invoice with id ${req.params.id}`,
  });
};

// @desc    Create new invoice
// @route   POST /api/v1/invoices
// @access  private
exports.createInvoice = async (req, res, next) => {
  const invoice = await Invoice.create(req.body);

  res.status(201).json({
    success: true,
    data: invoice,
  });
};

// @desc    Update an invoice
// @route   PUT /api/v1/invoices/:id
// @access  private
exports.updateInvoice = (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Update invoice with id ${req.params.id}` });
};

// @desc    Delete invoice
// @route   DELETE /api/v1/invoices/:id
// @access  private
exports.deleteInvoice = (req, res) => {
  res.status(200).json({ success: true, msg: `delete single invoice` });
};
