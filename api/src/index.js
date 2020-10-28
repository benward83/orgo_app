const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.use('/ingredients', require('./routes/ingredients'));

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
