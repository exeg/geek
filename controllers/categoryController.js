const mongoose = require('mongoose');
const Category = mongoose.model('Category');
const CatHandler = require('../handlers/catHandler');


exports.getCategories = async (req, res) => {
  let cats = await Category.find();
  let result = await CatHandler.catH(cats);
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