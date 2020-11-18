<template>
  <div class="recipe-form">
    <div class="container">
      <h1>Add your recipe to our list!</h1>
      <br>
      <br>
      <form >
          <div class="form-group">
            <label for="exampleFormControlInput1">Recipe name</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Your recipe name"
              v-model="recipeName">
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Ingredients</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="10"
              v-model="recipeIngredients"  >
            </textarea>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Method</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            >
            </textarea>
          </div>
          <b-button pill variant="info" @click="addRecipe">Button</b-button>
      </form>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      recipeName: '',
      recipeIngredients: [],
    };
  },
  methods: {
    addRecipe(newRecipe) {
      const { name, ingredients } = newRecipe;
      axios.post('http://localhost:3000/recipes', {
        name,
        ingredients,
      })
        .then((res) => {
          res.json(res);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.container {
max-width: 1000px;
display: block;
margin: auto;
width: 50%;
}
</style>
