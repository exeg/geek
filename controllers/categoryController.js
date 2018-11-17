const mongoose = require('mongoose');
const Category = mongoose.model('Category');
const Recipe = mongoose.model('Recipe');
const Article = mongoose.model('Article');
const CatHandler = require('../handlers/catHandler');


exports.getCategories = async (req, res) => {
  let cats = await Category.find();
  let result = await CatHandler.catH(cats);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(result, null, 3));
}

exports.getApiCategoriesById = async (req, res) => {
  let cats = await Category.find({});
  let cats2 = [];
  let tmp;
  for (let k of cats) {
    if (String(k.master) === String(req.params.id)) cats2.push(k);
    if (String(k._id) === String(req.params.id)) tmp = k;   
  }
  for (let k2 of cats) {
    if (String(tmp.master) === String(req.params.id) || 
      String(tmp._id) === String(req.params.id) ) cats2.push(k2);
  }
  let result = await CatHandler.catH(cats2);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(result, null, 3));
}


exports.createCategory = async (req, res) => {
  let master;
  if (!req.query.master) {
  	master = null;
  } else { master = req.query.master } 	
  const newCat = new Category({ text: req.query.text, master: master });
  await newCat.save();
  res.status(200).json(newCat);
}


exports.getApiCategory = async (req, res) => {
  const recipe = Recipe.find({"categories": req.params.id}).populate({
    path: 'categories'
    }).exec();
  const articles = Article.find({"categories": req.params.id}).populate({
    path: 'categories'
    }).exec();
  const result = await Promise.all([recipe, articles]);
  res.send(JSON.stringify(result));
};


exports.updateCategory = async (req, res) => {
  const category = await Category.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  }).exec();
  res.status(200).json(category);
}


exports.delCategoryById = async (req, res) => {
  const category = await Category.findByIdAndRemove(req.query.id);
  res.status(200);
}