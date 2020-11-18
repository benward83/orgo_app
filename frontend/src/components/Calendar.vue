<template>
  <div class="calendar">
    <div class="card-deck" v-for='day in days' :key='day.id' >
      <div class="card" style="width: 18rem;">
        <div class="card-body">
           <span class="week-text"><i>{{ day.name }}</i></span>
            <img :src="day.img" class="card-img-top" >
              <p class="card-text">
              <br>
            <b-button pill variant="info">Click to go to {{ day.name }}'s plan</b-button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      days: [
        { id: 1, name: 'Monday', img: '../assets/days_images/monday.jpg' },
        { id: 2, name: 'Tuesday', img: '../assets/days_images/tuesday.jpg' },
        { id: 3, name: 'Wednesday', img: '../assets/days_images/wednesday.jpg' },
        { id: 4, name: 'Thursday', img: '../assets/days_images/thursday.jpg' },
        { id: 5, name: 'Friday', img: '../assets/days_images/friday.jpg' },
        { id: 7, name: 'Saturday', img: '../assets/days_images/saturday.jpg' },
        { id: 6, name: 'Sunday', img: '../assets/days_images/sunday.jpg' },
      ],
    };
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
