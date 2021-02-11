<template>
<div class="larder-form">
  <div id="text-holder">
  <h1>What's in your Larder?</h1>
  <br>
    <p>Please pop a few ingredients in and we'll recommend some tasty dishes to cook up!</p>
  </div>
  <br>
  <br>
    <input
    class="larder-form"
    type="text"
    v-model="name"
    name="name"
    placeholder="Enter ingredient....">
  <br>
  <br>
  <b-button pill variant="info">Find me a recipe</b-button>
  <br>
  <br>
    <!-- <div class="card">
    <ul>
      <li v-for="recipe in matchingRepices" :key="recipe.id"><span
      >
      </span>{{ recipe.name }}</li>
    </ul>
    </div> -->
</div>
</template>

<script>

</script>
