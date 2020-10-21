<template>
  <div class="shopping">
    <Navbar />
    <br>
    <ShoppingList />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import ShoppingList from '@/components/ShoppingList.vue';

export default {
  name: 'shopping',
  components: {
    Navbar,
    ShoppingList,
  },
};
</script>
