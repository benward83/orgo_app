<template>
  <div class="ingredients">
    <div class="container">
<form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Recipe Name</label>
    <input type="email" class="form-control"
    id="exampleFormControlInput1" placeholder="A tasty meal is.....">
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Add ingredients</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
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
padding-top: 10%;
}
</style>
