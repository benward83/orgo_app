const express = require('express');
const db = require('../db');
const router = express.Router();


// Get all ingredients by id

router.get('/:id', (req, res) => {
  db.select('*')
  .from('ingredients')
  .where('id', req.params.id)
  .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err))
});


// Get an ingredient with name and id

router.get('/', (req, res) => {
  db.select('name', 'id')
    .from('ingredients')
    .where('id', req.params.id)
    .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err))
});



// Add a new ingredient

router.post('/', (req, res) => {
  const newIngredient = req.body;
  res.send('Ingredient added!');
});



// Delete an ingredient

router.delete('/:id', (req, res) => {
  db.select('id')
  .from('ingredients')
  .where('id', req.params.id)
  .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err))
});

module.exports = router
