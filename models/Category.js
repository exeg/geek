const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const categorySchema = new mongoose.Schema({
  text: { type: String },
  master: {
    type: mongoose.Schema.ObjectId,
    ref: 'Category',
    default: null
  }
});

module.exports = mongoose.model('Category', categorySchema);
