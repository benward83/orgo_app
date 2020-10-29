<template>
  <div class="ingredients">
    <div class="container">
      <h1>Add your recipe to our list!</h1>
      <br>
      <br>
<form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Recipe Name</label>
    <input type="email" class="form-control"
    id="exampleFormControlInput1" placeholder="This tasty dish is called.....">
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Add ingredients</label>
    <input class="form-control" type="text" placeholder="Recipe item">
    <input class="form-control" type="text" placeholder="Recipe item">
    <input class="form-control" type="text" placeholder="Recipe item">
    <input class="form-control" type="text" placeholder="Recipe item">
    <input class="form-control" type="text" placeholder="Recipe item">
    <input class="form-control" type="text" placeholder="Recipe item">
    <input class="form-control" type="text" placeholder="Recipe item">
    <input class="form-control" type="text" placeholder="Recipe item">
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Method (optional)</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    <br>
    <button type="button" class="btn btn-primary">SUBMIT</button>
  </div>
</form>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.container {
max-width: 1000px;
padding-top: 5%;
}
</style>
