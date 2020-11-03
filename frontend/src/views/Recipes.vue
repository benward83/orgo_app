<template>
  <div id="recipes">
    <Navbar />
    <br>
    <RecipeForm />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import RecipeForm from '@/components/RecipeForm.vue';

export default {
  name: 'recipes',
  components: {
    Navbar,
    RecipeForm,
  },

};
</script>

<style>

</style>
