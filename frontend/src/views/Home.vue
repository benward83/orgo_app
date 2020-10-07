<template>
  <div class="home">
    <Header />
    <div class="card-deck">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Ingredients</h5>
          <img class="card-img-top" src="../assets/Ingredients.jpg">
          <p class="card-text"></p>
          <router-link to="/ingredients">Ingredients</router-link> |

        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Calendar</h5>
          <img class="card-img-top" src="../assets/Calendar.jpg">
          <p class="card-text"></p>
          <router-link to="/calendar">Calendar</router-link> |

        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Shopping List</h5>
          <img class="card-img-top" src="../assets/Shopping.jpg">
          <p class="card-text"></p>
          <router-link to="/shopping">Shopping List</router-link> |

        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Recipes</h5>
          <img class="card-img-top" src="../assets/Recipes.jpg">
          <p class="card-text"></p>
          <router-link to="/recipes">Recipes</router-link> |

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Header from '@/components/Header.vue';

export default {
  name: 'Home',
  components: {
    Header,
  },

};
</script>

<style>

.card-deck {
  margin-bottom: 30px;
}

.card {
   color: whitesmoke

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
</style>
