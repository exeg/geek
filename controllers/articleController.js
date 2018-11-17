const mongoose = require('mongoose');
const Category = mongoose.model('Category');
const Recipe = mongoose.model('Recipe');
const Article = mongoose.model('Article');
const CatHandler = require('../handlers/catHandler');


exports.getApiArticle = async (req, res) => {
  let article = await Article.findOne({ _id: req.params.id }).populate({
    path: 'categories'
    }).exec();
  let cats = article.categories;
  let result = await CatHandler.catH(cats);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(result, null, 3));
}

exports.getArticleById = async (req, res) => {
  const article = await Article.findOne({ _id: req.params.id }).populate({
    path: 'categories'
    }).exec();
  if (!article) return next();
  res.send(JSON.stringify(article));
};


exports.createArticle = async (req, res) => {
  const newArticle = new Article(req.body);
  await newArticle.save();
  res.status(200).json(newArticle);
}


exports.updateArticle = async (req, res) => {
  const article = await Article.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  }).exec();
  res.status(200).json(article);

}


exports.delArticleyById = async (req, res) => {
  const article = await Article.findByIdAndRemove(req.query.id);
  res.status(200);
}