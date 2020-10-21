<template>
  <div id='calendar'>
    <Navbar />
    <Calendar />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Calendar from '@/components/Calendar.vue';

export default {
  name: 'calendar',
  components: {
    Navbar,
    Calendar,
  },

};
</script>

<style>

</style>
