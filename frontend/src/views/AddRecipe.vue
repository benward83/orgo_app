<template>
  <div id="addRecipe">
    <Navbar />
    <RecipeHeader />
    <br>
    <RecipeForm />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import RecipeForm from '@/components/RecipeForm.vue';
import RecipeHeader from '@/components/RecipeHeader.vue';

export default {
  name: 'add-recipe',
  components: {
    Navbar,
    RecipeForm,
    RecipeHeader,
  },

};
</script>

<style>

</style>
