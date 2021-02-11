<template>
<div class="recipe-search">
  <h1>Search for...</h1>
  <br>
  <br>
    <input class="recipe-search" type="text" v-model="name" name="name" placeholder="recipes...">
  <br>
  <br>
  <b-button pill variant="info">Find me a recipe</b-button>
  <br>
  <br>
    <div class="card">
    <ul>
      <li v-for="recipe in matchingRepices" :key="recipe.id"><span
      >
      </span>{{ recipe.name }}</li>
    </ul>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      recipes: [],
    };
  },
  computed: {
    matchingRepices() {
      if (!this.name) {
        return this.recipes;
      }
      return this.recipes.filter((r) => r.name.indexOf(this.name) >= 0);
    },
  },
  methods: {
  },
  created() {
    axios.get('http://localhost:3000/recipes')
      .then(((res) => { this.recipes = res.data; }));
  },
};
</script>
