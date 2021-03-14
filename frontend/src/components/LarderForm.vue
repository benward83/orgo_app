<template>
<div class="larder-form">
  <div
    id="larder-text-holder"
  >
    <h1
    class="orgo-h1"
    > What's in your Larder?
    </h1>
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
  <b-button class="orgo-form-btn">Find me a recipe</b-button>
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
