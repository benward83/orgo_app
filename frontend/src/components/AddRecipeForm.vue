<template>
  <div class="add-recipe-form">
    <div class="container">
      <h1>Add your recipe to our list!</h1>
      <br>
      <br>
      <form >
          <div class="form-group">
            <label for="exampleFormControlInput1">Recipe name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Your recipe name"
              v-model="recipe.name">
              <AddRecipeTags />
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea
              class="form-control"
              rows="3"
              v-model="recipe.description"
              >
            </textarea>
          </div>
          <b-button pill variant="info" @click="addRecipe">Button</b-button>
      </form>
    </div>
  </div>
</template>

<script>

import AddRecipeTags from '@/components/AddRecipeTags.vue';

import axios from 'axios';

export default {
  components: {
    AddRecipeTags,
  },
  data() {
    return {
      recipe: {},
    };
  },
  methods: {
    addRecipe() {
      axios.post('http://localhost:3000/recipes', this.recipe)
        .then((res) => console.log(res))
        .catch((res) => console.error(res));
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
