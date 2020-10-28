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



// Add a new recipe

router.post('/', (req, res) => {
  const newRecipe = req.body;
  res.send('Recipe added!');
});


// Update a recipe

router.patch('/:id', (req, res) => {
  db('recipe_id')
  .from('recipes')
  .where('id', 3)
  .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err))
});


// Delete a recipe

router.delete('/:id', (req, res) => {
  db('recipe_id')
  .from('recipes')
  .where('id', 2)
  .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err))
});

module.exports = router
