<template>
  <div class="shopping">
    <Navbar />
    <ShoppingHeader />
    <br>
    <ShoppingList />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import ShoppingList from '@/components/ShoppingList.vue';
import ShoppingHeader from '@/components/ShoppingHeader.vue';

export default {
  name: 'shopping',
  components: {
    Navbar,
    ShoppingList,
    ShoppingHeader,
  },
};
</script>
