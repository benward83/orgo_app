<template>
  <div id='calendar'>
    <Navbar />
    <CalendarHeader />
    <br>
    <VueCalendar />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import VueCalendar from '@/components/VueCalendar.vue';
import CalendarHeader from '@/components/CalendarHeader.vue';

export default {
  name: 'calendar',
  components: {
    Navbar,
    CalendarHeader,
    VueCalendar,
  },
};
</script>

<style>

</style>
