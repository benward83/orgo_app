<template>
  <div id='calendar'>
      <Navbar />
      <CalendarHeader />
    <br>
    <div>
      <Calendar  />
    </div>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Calendar from '@/components/Calendar.vue';
import CalendarHeader from '@/components/CalendarHeader.vue';

export default {
  name: 'calendar',
  components: {
    Navbar,
    CalendarHeader,
    Calendar,
  },
  props: ['days'],
};
</script>

<style scoped>

</style>
