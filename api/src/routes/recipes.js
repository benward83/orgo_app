const express = require('express');
const db = require('../db');
const router = express.Router();


// Get all recipes

router.get('/', (req, res) => {
  db.select('*')
    .from('recipes')
    .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err))
});


// Get a recipe by name and id

router.get('/:id', (req, res) => {
  db.select('*')
  .from('recipes')
    .where('id', req.params.id)
    .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err));
});



// Add a new recipe

router.post('/', (req, res) => {
  const newRecipe = req.body;
  db('recipes')
    .returning(['*'])
    .insert(newRecipe)
    .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err))
});


// Update a recipe

router.patch('/:id', (req, res) => {
  const patchRecipe = req.body;
  db('recipes')
    .returning(['*'])
    .where('id', req.params.id)
    .update(patchRecipe)
    .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err))
});


// Delete a recipe

router.delete('/:id', (req, res) => {
  db('recipes')
  .returning(['*'])
  .where('id', req.params.id)
  .del()
  .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err))
});

module.exports = router
