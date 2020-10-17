<template>
  <div class="shopping">
    <h1>This is the shopping list</h1>
  </div>
</template>

<script>
export default {
  name: 'shopping',
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
      ],
    };
  },

};
</script>

<style>

</style>
