const express = require('express');
const db = require('../db');
const router = express.Router();


// List all recipes by name and id

router.get('/', (req, res) => {
  db.select('*').from('recipes')
    .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err))

});


// Get a recipe by id

router.get('/:id', (req, res) => {
  db.select('id')
  .from('recipes')
  .where('id', req.params.id)
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

router.patch('/', (req, res) => {
  db.select('name')
  .from('recipes')
  res.send('The recipe has been updated')
});


// Delete a recipe

router.delete('/:id', (req, res) => {
  db.select('id')
  .from('recipes')
  .where('id', req.params.id)
  .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err))
});

module.exports = router
