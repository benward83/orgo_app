<template>
<div class="recipe-search">
  <label for="input-with-list">Search for Recipes</label>
  <b-form-input list="input-list" id="input-with-list"></b-form-input>
  <b-form-datalist id="input-list" :options="options"></b-form-datalist>
  <br>
  <br>
  <b-button pill variant="info">Search</b-button>
</div>
</template>

<script>
export default {
  data() {
    return {
      options: ['Chicken Korma', 'Pork Meatballs', 'Beef', 'Aubergine', 'Carrots'],
    };
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

</style>
