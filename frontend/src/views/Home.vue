<template>
  <div class="home">
    <Header />
    <div class="card-deck">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Larder</h5>
          <img class="card-img-top" src="../assets/Ingredients-min.jpg">
          <p class="card-text">
            <br>
            Go to the <router-link class="link" to="/larder">Larder</router-link>
            to see what you can cook up on what you have in your cupboards.</p>

        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Calendar</h5>
          <img class="card-img-top" src="../assets/Calendar-min.jpg">
          <p class="card-text">
            <br>
            Go to the <router-link class="link" to="/calendar">Calendar</router-link>
            to plan your meals based on your schedule.
          </p>

        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Shopping List</h5>
          <img class="card-img-top" src="../assets/Shopping-min.jpg">
          <p class="card-text">
            <br>
            Go to the  <router-link class="link" to="/shopping">Shopping List</router-link>
            to plan your weekly shop.
          </p>

        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Recipes</h5>
          <img class="card-img-top" src="../assets/Recipes-min.jpg">
         <p class="card-text">
            <br>
            Go to  <router-link class="link" to="/recipes">Recipes</router-link>
            to search our database for the best recipes or to share on of your own with us.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Header from '@/components/Header.vue';

export default {
  name: 'home',
  components: {
    Header,
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
