const express = require('express');
// const db = require('../db');
const router = express.Router();

// List all ingredients

router.get('/', (req, res) => {
  db.select('name').from('ingredients')
    .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err))
});

router.get('/:id', (req, res) => {
  db('ingredient_id')
  .from('ingredients')
  .where('id', 1)
    .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err))
});


module.exports = router
