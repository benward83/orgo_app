<template>
 <div id="home">
   <Header />
   <Home />
 </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Home from '@/components/Home.vue';

export default {
  name: 'home',
  components: {
    Header,
    Home,
  },

};
</script>
