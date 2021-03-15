<template>
  <div id="add-recipe-view">
    <RecipeHeader />
    <br>
    <AddRecipeForm />
  </div>
</template>

<script>

import AddRecipeForm from '@/components/AddRecipeForm.vue';
import RecipeHeader from '@/components/RecipeHeader.vue';

export default {
  name: 'add-recipe',
  components: {
    AddRecipeForm,
    RecipeHeader,
  },
  methods: {
  },
};
</script>
