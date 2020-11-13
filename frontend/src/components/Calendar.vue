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
           <calendar-modal id="1" />
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
           <span class="week-text"><i>Tuesday</i></span>
          <img class="card-img-top" src="../assets/days_images/tuesday.jpg">
          <p class="card-text">
          </p>
          <br>
           <calendar-modal id="2" />
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
           <span class="week-text"><i>Wednesday</i></span>
          <img class="card-img-top" src="../assets/days_images/wednesday.jpg">
          <p class="card-text">
          </p>
          <br>
           <calendar-modal id="3"/>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
           <span class="week-text"><i>Thursday</i></span>
          <img class="card-img-top" src="../assets/days_images/thursday.jpg">
         <p class="card-text">
          </p>
          <br>
           <calendar-modal id="4"/>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
           <span class="week-text"><i>Friday</i></span>
          <img class="card-img-top" src="../assets/days_images/friday.jpg">
         <p class="card-text">
          </p>
          <br>
           <calendar-modal id="5"/>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
           <span class="week-text"><i>Saturday</i></span>
          <img class="card-img-top" src="../assets/days_images/saturday.jpg">
         <p class="card-text">
          </p>
          <br>
           <calendar-modal id="6"/>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
           <span class="week-text"><i>Sunday</i></span>
          <img class="card-img-top" src="../assets/days_images/sunday.jpg">
         <p class="card-text">
          </p>
          <br>
          <calendar-modal id="7"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarModal from './CalendarModal.vue';

export default {
  components: {
    CalendarModal,
  },
};
</script>

<style scoped>
.card-de
CalendarModalck {
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
