<template>
  <div class="home">
    <div class="card-deck">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <router-link class="link" to="/larder">Larder
          <img class="card-img-top" src="../assets/Ingredients-min.jpg">
          <p class="card-text">
            <br>
            Go to the Larder
            to see what you can cook up on what you have in your cupboards.</p>
          </router-link>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <router-link class="link" to="/calendar">Calendar
          <img class="card-img-top" src="../assets/Calendar-min.jpg">
          <p class="card-text">
            <br>
            Go to the Calendar
            to plan your meals based on your schedule.
          </p>
          </router-link>

        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <router-link class="link" to="/shopping">Shopping List
          <img class="card-img-top" src="../assets/Shopping-min.jpg">
          <p class="card-text">
            <br>
            Go to the Shopping List
            to plan your weekly shop.
          </p>
          </router-link>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <router-link class="link" to="/recipes">Search Recipes
          <img class="card-img-top" src="../assets/Recipes-min.jpg">
         <p class="card-text">
            <br>
            Go to  Recipes
            to search our database for the best recipes or to share on of your own with us.
          </p>
          </router-link>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <router-link class="link" to="/addrecipe">Add Recipe
          <img class="card-img-top" src="../assets/add-recipe-min.jpg">
         <p class="card-text">
            <br>
            Go to  Add Recipes
            to add your own recipes and share them with us.
          </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

.card-deck {
  margin-bottom: 30px;
}

.card {
   color: #cec6c6;
   border-color: #2980b9;

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
   color: #2980b9
}
</style>
