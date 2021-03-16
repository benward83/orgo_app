<template>
  <div id="add-recipe-view">
    <Navbar />
    <AddRecipeForm />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import AddRecipeForm from '@/components/AddRecipeForm.vue';

export default {
  name: 'add-recipe',
  components: {
    Navbar,
    AddRecipeForm,
  },
  methods: {
  },
};
</script>
