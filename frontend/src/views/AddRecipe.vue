<template>
  <div id="add-recipe">
    <Navbar />
    <RecipeHeader />
    <br>
    <AddRecipeForm />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import AddRecipeForm from '@/components/AddRecipeForm.vue';
import RecipeHeader from '@/components/RecipeHeader.vue';

export default {
  name: 'add-recipe',
  components: {
    Navbar,
    AddRecipeForm,
    RecipeHeader,
  },
  methods: {
  },
};
</script>

<style>

</style>
