<template>
<div class="ingredients">
<Navbar />
<br>
<IngredientForm />

</div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import IngredientForm from '@/components/IngredientForm.vue';

export default {
  name: 'ingredients',
  components: {
    Navbar,
    IngredientForm,
  },

};
</script>

<style>

</style>
