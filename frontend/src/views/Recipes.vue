<template>
  <div id="recipes">
    <Navbar />
    <RecipeHeader />
    <br>

  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import RecipeHeader from '@/components/RecipeHeader.vue';

export default {
  name: 'recipes',
  components: {
    Navbar,
    RecipeHeader,
  },

};
</script>

<style>

</style>
