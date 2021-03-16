<template>
  <div class="recipe-search">
    <h1 class="orgo-h1">Search for...</h1>
      <input
        class="recipe-search"
        type="text"
        v-model="name"
        name="name"
        placeholder="recipes...">
    <b-button
      class="orgo-form-btn"
    >Find me a recipe
    </b-button>
      <div class="recipe-card">
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
