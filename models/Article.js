const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const articleSchema = new mongoose.Schema({
  name: { type: String },
  desc: { type: String },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: 'Category'
  },
  text: { type: String }
});

module.exports = mongoose.model('Article', articleSchema);