const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();


app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.use('/ingredients', require('./routes/ingredients'));
app.use('/recipes', require('./routes/recipes'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
