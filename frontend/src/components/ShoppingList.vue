<template>
  <div class="shoppingList">
    <h1>This is the shopping list</h1>
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'bananas',
          quantity: '4',
        },
        {
          id: 2,
          title: 'chorizo',
          quanity: '1',
        },
      ],
    };
  },

};
</script>

<style>

</style>
