const express = require('express');
const db = require('../db');
const router = express.Router();

// List all recipes by name and id

router.get('/', (req, res) => {
  db.select('name', 'id').from('recipes')
    .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err))

});


// Get a recipe by id

router.get('/:id', (req, res) => {
  db('recipe_id')
  .from('recipes')
  .where('id', 3)
    .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err))
});


// Get full recipe

// router.get('/full_recipe', (req, res) => {
//   db('full_recipe')
//   .select('ingredient.id','recipe.id')
//   .from('recipes_ingredients')
//   .join('recipes', 'recipes.id', '=', 'ingredients.id')
//   .where('recipe.id', 2)
//     .then(result => {
//       res.json(result);
//     })
//     .catch(err => res.send(500, err))

// });

// Add a new Recipe

router.post('/', (req, res) => {
  const newRecipe = req.body;
  console.log('new Recipe!');
  res.send('Recipe added!');
});


module.exports = router
