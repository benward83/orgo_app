<template>
  <div id='calendar'>
      <Navbar />
      <CalendarHeader />
    <br>
    <div>
      <Calendar :days="days" />
    </div>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Calendar from '@/components/Calendar.vue';
import CalendarHeader from '@/components/CalendarHeader.vue';

import Monday from '@/assets/days_images/monday.jpg';
import Tuesday from '@/assets/days_images/tuesday.jpg';
import Wednesday from '@/assets/days_images/wednesday.jpg';
import Thursday from '@/assets/days_images/thursday.jpg';
import Friday from '@/assets/days_images/friday.jpg';
import Saturday from '@/assets/days_images/saturday.jpg';
import Sunday from '@/assets/days_images/sunday.jpg';

export default {
  name: 'calendar',
  components: {
    Navbar,
    CalendarHeader,
    Calendar,
  },
  data() {
    return {
      days: [
        { id: 1, name: 'Monday', img: Monday },
        { id: 2, name: 'Tuesday', img: Tuesday },
        { id: 3, name: 'Wednesday', img: Wednesday },
        { id: 4, name: 'Thursday', img: Thursday },
        { id: 5, name: 'Friday', img: Friday },
        { id: 7, name: 'Saturday', img: Saturday },
        { id: 6, name: 'Sunday', img: Sunday },
      ],
    };
  },

};
</script>

<style scoped>

</style>
