const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const recipeSchema = new mongoose.Schema({
  name: { type: String },
  categories: [
    { type: mongoose.Schema.ObjectId, ref: 'Category' }
  ],
  text: { type: String }
});

module.exports = mongoose.model('Recipe', recipeSchema);
