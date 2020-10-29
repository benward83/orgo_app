const express = require('express');
const db = require('../db');
const router = express.Router();


// Get all ingredients

router.get('/', (req, res) => {
  db.select('*')
    .from('ingredients')
    .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err))
});


// Get an ingredient with name and id

router.get('/:id', (req, res) => {
  db.select('name', 'id')
    .from('ingredients')
    .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err))
});



// Add a new ingredient

router.post('/', (req, res) => {
  const newIngredient = req.body;
  db('ingredients')
    .returning(['name', 'id'])
    .insert(newIngredient)
    .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err))
});



// Delete an ingredient

router.delete('/:id', (req, res) => {
  db('ingredients')
    .returning(['name', 'id'])
    .where('id', req.params.id)
    .del()
    .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err))
});

module.exports = router
