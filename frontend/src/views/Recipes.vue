<template>
  <div id="recipes">
    <Navbar />
    <RecipeHeader />
    <br>
    <RecipeSearch />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import RecipeHeader from '@/components/RecipeHeader.vue';
import RecipeSearch from '@/components/RecipeSearch.vue';

export default {
  name: 'recipes',
  components: {
    Navbar,
    RecipeHeader,
    RecipeSearch,
  },

};
</script>

<style>

</style>
