const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  projectCode: {
    type: String,
    unique: true,
    required: true,
  },
  location: String,
  bowheer: String,
  isActive: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Projects', ProjectSchema);
