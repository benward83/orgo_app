<template>
  <div class="calendar">
     <CalendarModal />
    <h1>Plan your weekly meals here</h1>
    <br>
    <br>
    <div class="card-deck" v-for='day in days' :key='day.id' >
      <div class="card" style="width: 15rem;">
        <div class="card-body">
           <span class="week-text"><i>{{ day.name }}</i></span>
            <img :src="day.img" class="card-img-top" >
              <p class="card-text">
              <br>
            <b-button
            pill variant="info"
            @click="$bvModal.show('modal-scoped')"

            >
            Click to go to {{ day.name }}'s plan
            </b-button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import CalendarModal from '@/components/CalendarModal.vue';

export default {
  components: {
    CalendarModal,
  },
  props: ['days'],
};
</script>
