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
  db.select('*')
    .from('ingredients')
    .where('id', req.params.id)
    .then(result => {
      if (result.length) {
        return res.json(result[0]);
      }
      res.json(404, { error: 'Ingredient not found' });
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
      return res.json(result[0]);
    })
    .catch(err => res.send(500, err))
});

// Update an ingredient

router.patch('/:id', (req, res) => {
  db('ingredients')
    .returning(['*'])
    .where('id', req.params.id)
    .update(req.body)
    .then(result => {
      if (result.length) {
        return res.json(result[0]);
      }
      return res.json(404, { error: 'Ingredient not found' });
    })
    .catch(err => res.send(500, err))
});

// Delete an ingredient

router.delete('/:id', (req, res) => {
  db('ingredients')
    .returning(['*'])
    .where('id', req.params.id)
    .del()
    .then(result => {
      if (result.length) {
        return res.json(result[0]);
      }
      return res.json(404, { error: 'Ingredient not found' });
    })
    .catch(err => res.send(500, err))
});

module.exports = router
