const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const knex = require('knex');

const ingredientArr = [];

const db = knex({
  client: 'postgresql',
  connection: {
    host: "postgresql",
    database: 'orgo',
    user:     'orgo',
    password: 'orgo'
  }
});

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());


app.get('/ingredients', (req, res) => {
  db.select('name').from('ingredients')
    .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err))

});

app.get('/ingredients/1', (req, res) => {
  db('ingredient_id')
  .from('ingredients')
  .where('id', 1)
    .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err))

});

app.get('/recipes', (req, res) => {
  db.select('name').from('recipes')
    .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err))

});

app.get('/full_recipe', (req, res) => {
  db('full_recipe')
  .select('ingredient.id','recipe.id')
  .from('recipes_ingredients')
  .join('recipes', 'recipes.id', '=', 'ingredients.id')
  .where('recipe.id', 2)
    .then(result => {
      res.json(result);
    })
    .catch(err => res.send(500, err))

});

app.post('/addIngredient', (req, res) => {
  const newIngredient = req.body;
  console.log('newIngredient');
  ingredientArr.push(newIngredient);
  res.send('Ingredient added!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
