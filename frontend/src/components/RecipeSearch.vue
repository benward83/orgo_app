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
      <li v-for="recipe in recipes" :key="recipe.id"><span
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
  methods: {
  },
  created() {
    axios.get('http://localhost:3000/recipes')
      .then(((res) => { this.recipes = res.data; }));
  },
};
</script>

<style scoped>

.recipe-search {
max-width: 750px;
display: block;
margin: auto;
width: 50%;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: #b9b8b8;
}

li {
    background: white;
    height: 50px;
    line-height: 40px;
    color: #666;
}

li:nth-child(2n) {
    background-color: #b9b8b8;
}

input {
    font-size: 20px;
    color: black;
    background-color: #f7f7f7;
    width: 75%;
    padding: 5px 5px 5px 10px;
    box-sizing: border-box;
    border: 3px solid rgba(0,0,0,0);
}

input:focus {
  background: whitesmoke;
  border: 3px solid #2980b9;
  outline: none;

}

</style>
