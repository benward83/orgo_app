<template>
  <div class="calendar">
    <div class="card-deck">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
           <span class="week-text"><i>Monday</i></span>
          <img class="card-img-top" src="../assets/days_images/monday.jpg">
          <p class="card-text">
          </p>
          <br>
          <CalendarModal />        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
           <span class="week-text"><i>Tuesday</i></span>
          <img class="card-img-top" src="../assets/days_images/tuesday.jpg">
          <p class="card-text">
          </p>
          <br>
       </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
           <span class="week-text"><i>Wednesday</i></span>
          <img class="card-img-top" src="../assets/days_images/wednesday.jpg">
          <p class="card-text">
          </p>
          <br>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
           <span class="week-text"><i>Thursday</i></span>
          <img class="card-img-top" src="../assets/days_images/thursday.jpg">
         <p class="card-text">
          </p>
          <br>
       </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
           <span class="week-text"><i>Friday</i></span>
          <img class="card-img-top" src="../assets/days_images/friday.jpg">
         <p class="card-text">
          </p>
          <br>
       </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
           <span class="week-text"><i>Saturday</i></span>
          <img class="card-img-top" src="../assets/days_images/saturday.jpg">
         <p class="card-text">
          </p>
          <br>
       </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
           <span class="week-text"><i>Sunday</i></span>
          <img class="card-img-top" src="../assets/days_images/sunday.jpg">
         <p class="card-text">
          </p>
          <br>
       </div>
      </div>
    </div>
  </div>
</template>

<script>

import CalendarModal from '@/components/CalendarModal.vue';

export default {
  data() {
    return {
      days: [
        { id: 1, name: 'mon' },
        { id: 2, name: 'tue' },
        { id: 3, name: 'wed' },
        { id: 4, name: 'thu' },
        { id: 5, name: 'fri' },
        { id: 6, name: 'sat' },
        { id: 7, name: 'sun' },
      ],
    };
  },
  components: {
    CalendarModal,

  },

};
</script>

<style scoped>
.card-deck {
  margin-bottom: 30px;
}

.card {
   color: #cec6c6

}

.card-title {
  color: black;
  text-decoration-color: black;

}

.card-text {
  color: black;
  text-decoration-color: black;

}
.week-text {
  color: black;
  text-decoration-color: black;

}

.card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}

.link {
  color: black;
}
.link:hover {
   color: #00F
}
</style>
