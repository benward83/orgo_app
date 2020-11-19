<template>
<div class="larder-form">
  <div id="text-holder">
  <h1>What's in your Larder?</h1>
  <br>
  <p>Please pop a few ingredients in and we'll recommend some tasty dishes to cook up!</p>
  </div>
<form>
    <br>
    <div class="form-group">
        <label for="exampleFormControlTextarea1"></label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          v-model="recipeIngredients"
          >
        </textarea>
      </div>
     <b-button pill variant="info">Submit</b-button>
</form>
</div>
</template>

<script>

</script>

<style lang="scss" scoped>
.larder-form {
max-width: 1000px;
display: block;
margin: auto;
width: 50%;
}

#text-holder {
display: block;
margin: auto;
width: 50%;
}

.form-group {
   color: #cec6c6;
   border-color: #2980b9;
}
</style>
