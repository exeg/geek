const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
// const recipeController = require('../controllers/recipeController');
// const articleController = require('../controllers/articleController');

const { catchErrors } = require('../handlers/errorHandlers');



router.get('/categories', catchErrors(categoryController.getCategories));
router.post('/add/category', catchErrors(categoryController.createCategory));
router.post('/add/category/:id', catchErrors(categoryController.updateCategory));
router.delete('/del/category/:id', catchErrors(categoryController.delCategoryById));

// router.get('/recipies', catchErrors(recipeController.getCategories));
// router.post('/add/recipe', catchErrors(recipeController.createCategory));
// router.post('/add/recipe/:id', catchErrors(recipeController.updateCategory));
// router.delete('/del/recipe/:id', catchErrors(recipeController.delRecipeById));

// router.get('/articles', catchErrors(articleController.getArticles));
// router.post('/add/article', catchErrors(articleController.createArticle));
// router.post('/add/article/:id', catchErrors(articleController.updateArticle));
// router.delete('/del/article/:id', catchErrors(articleController.delArticleById));




router.get('/', function(req, res) {
  res.send("hey there boi")
})

module.exports = router;