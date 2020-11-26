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

<style scoped>

.calendar {
    width: 750px;
    margin: auto auto;
    box-shadow: 0 0 3px rgba(0,0,0 0.1)ß
}

.card-deck {
  margin-bottom: 30px;

}

.card {
   border-color: #2980b9;
}
.card-body {
  background-color: rgb(240,235,223);
  background: linear-gradient(180deg, rgba(240,235,223,1) 30%,
 rgba(78,78,78,0.7105217086834734) 100%);
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
    height: 300px;
    object-fit: contain;
}
</style>
