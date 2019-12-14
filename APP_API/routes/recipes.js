const express = require('express');
const router = express.Router();
const ctrlRecipe = require('../controllers/recipe');

router
    .route('/recipes')
    .get(ctrlRecipe.getRecipes)
    .post(ctrlRecipe.createRecipe);

router
    .route('/recipes/:recipeid')
    .get(ctrlRecipe.getSingleRecipe)
    .put(ctrlRecipe.updateRecipe)
    .delete(ctrlRecipe.deleteRecipe);

module.exports = router;