const express = require('express');
const db = require('../db');
const router = express.Router();

// Get an ingredient with name and id

router.get('/', (req, res) => {
  db.select('name', 'id').from('ingredients')
    .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err))
});

// Get an ingredient by id

router.get('/:id', (req, res) => {
  db('ingredient_id')
  .from('ingredients')
  .where('id', 1)
    .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err))
});




// Add a new ingredient

router.post('/', (req, res) => {
  const newIngredient = req.body;
  console.log('newIngredient');
  res.send('Ingredient added!');
});



module.exports = router
