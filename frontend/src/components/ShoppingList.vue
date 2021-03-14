<template>
  <div class="shopping">
    <div id="shopping-container">
      <h1>Shopping List <span id="toggle-form">
          <i class="fa fa-plus" ></i></span>
        </h1>
            <input type="text" v-model="name" name="name" placeholder="Add New Item">
          <ul>
            <li v-for="(ingredient) in ingredients" :key="ingredient.id"><span
            >
            <i class="fa fa-trash" ></i></span>{{ ingredient.name }}</li>
          </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      ingredients: [],
      name: '',
      id: '',
    };
  },
  methods: {
  },
  created() {
    axios.get('http://localhost:3000/ingredients')
      .then(((res) => { this.ingredients = res.data; }));
  },
};

</script>
