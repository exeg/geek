const mongoose = require('mongoose');
const Category = mongoose.model('Category');
const Recipe = mongoose.model('Recipe');
const CatHandler = require('../handlers/catHandler');


exports.getApiRecipe = async (req, res) => {
  let recipe = await Recipe.findOne({ _id: req.params.id }).populate({
    path: 'categories'
    }).exec();
  let cats = recipe.categories;
  let result = await CatHandler.catH(cats);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(result, null, 3));
}


exports.getRecipeById = async (req, res) => {
  const recipe = await Recipe.findOne({ _id: req.params.id }).populate({
    path: 'categories'
    }).exec();
  if (!recipe) return next();
  res.send(JSON.stringify(recipe));
};


exports.getRecipies = async (req, res) => {
  let result = await Recipe.find();
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(result, null, 3));
}

exports.createRecipe = async (req, res) => {
  const newRecipe = new Recipe(req.body);
  await newRecipe.save();
  res.status(200).json(newRecipe);
}


exports.updateRecipe = async (req, res) => {
  const recipe = await Recipe.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  }).exec();
  res.status(200).json(recipe);
}


exports.delRecipeById = async (req, res) => {
  const recipe = await Recipe.findByIdAndRemove(req.query.id);
  res.status(200);
}