const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const recipeController = require('../controllers/recipeController');
const articleController = require('../controllers/articleController');

const { catchErrors } = require('../handlers/errorHandlers');



router.get('/categories', catchErrors(categoryController.getCategories));
router.get('/category/:id', catchErrors(categoryController.getCategoryById));
router.post('/add/category', catchErrors(categoryController.createCategory));
router.post('/add/category/:id', catchErrors(categoryController.updateCategory));
router.delete('/del/category/:id', catchErrors(categoryController.delCategoryById));

router.get('/recipies', catchErrors(recipeController.getRecipies));
router.post('/add/recipe', catchErrors(recipeController.createRecipe));
router.post('/add/recipe/:id', catchErrors(recipeController.updateRecipe));
router.delete('/del/recipe/:id', catchErrors(recipeController.delRecipeById));

router.get('/articles', catchErrors(articleController.getArticles));
router.post('/add/article', catchErrors(articleController.createArticle));
router.post('/add/article/:id', catchErrors(articleController.updateArticle));
router.delete('/del/article/:id', catchErrors(articleController.delArticleById));

/* API */
router.get('/recipe/:id', catchErrors(recipeController.getRecipeById));
router.get('/article/:id', catchErrors(recipeController.getArticleById));

router.get('/api/recipe/:id', catchErrors(recipeController.getApiRecipe));
router.get('/api/article/:id', catchErrors(articleController.getApiArticle));
router.get('/api/category/:id', catchErrors(categoryController.getApiCategory));
router.get('/api/cats/:id', catchErrors(categoryController.getApiCategoriesById));





router.get('/', function(req, res) {
  res.send("hey there boi")
})

module.exports = router;