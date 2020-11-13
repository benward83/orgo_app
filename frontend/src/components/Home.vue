<template>
  <div class="home">
    <div class="card-deck">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <router-link class="link" to="/larder">Larder</router-link>
          <img class="card-img-top" src="../assets/Ingredients-min.jpg">
          <p class="card-text">
            <br>
            Go to the Larder
            to see what you can cook up on what you have in your cupboards.</p>

        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <router-link class="link" to="/calendar">Calendar</router-link>
          <img class="card-img-top" src="../assets/Calendar-min.jpg">
          <p class="card-text">
            <br>
            Go to the Calendar
            to plan your meals based on your schedule.
          </p>

        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <router-link class="link" to="/shopping">Shopping List</router-link>
          <img class="card-img-top" src="../assets/Shopping-min.jpg">
          <p class="card-text">
            <br>
            Go to the Shopping List
            to plan your weekly shop.
          </p>

        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <router-link class="link" to="/recipes">Search Recipes</router-link>
          <img class="card-img-top" src="../assets/Recipes-min.jpg">
         <p class="card-text">
            <br>
            Go to  Recipes
            to search our database for the best recipes or to share on of your own with us.
          </p>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <router-link class="link" to="/addrecipe">Add Recipe</router-link>
          <img class="card-img-top" src="../assets/add-recipe-min.jpg">
         <p class="card-text">
            <br>
            Go to  Add Recipes
            to add your own recipes and share them with us.
          </p>
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
