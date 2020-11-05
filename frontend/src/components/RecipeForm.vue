<template>
  <div class="recipe-form">
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
   <b-row>
    <b-col>
    <label for="exampleFormControlSelect2">Item</label>
    <input class="form-control" type="text" placeholder="Item">
    <input class="form-control" type="text" placeholder="Item">
    <input class="form-control" type="text" placeholder="Item">
    <input class="form-control" type="text" placeholder="Item">
    <input class="form-control" type="text" placeholder="Item">
    <input class="form-control" type="text" placeholder="Item">
    <input class="form-control" type="text" placeholder="Item">
    </b-col>

    <b-col cols="12" md="auto">
    <label for="exampleFormControlSelect2">Quantity</label>
    <input class="form-control" type="text" placeholder="">
    <input class="form-control" type="text" placeholder="">
    <input class="form-control" type="text" placeholder="">
    <input class="form-control" type="text" placeholder="">
    <input class="form-control" type="text" placeholder="">
    <input class="form-control" type="text" placeholder="">
    <input class="form-control" type="text" placeholder="">
    </b-col>
    <b-col col lg="2">
      <label for="exampleFormControlSelect2">Weight/Value</label>
        <input class="form-control" type="text" placeholder="">
    <input class="form-control" type="text" placeholder="">
    <input class="form-control" type="text" placeholder="">
    <input class="form-control" type="text" placeholder="">
    <input class="form-control" type="text" placeholder="">
    <input class="form-control" type="text" placeholder="">
    <input class="form-control" type="text" placeholder="">
    </b-col>
  </b-row>

  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Method (optional)</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    <br>
  <b-button pill variant="success">Submit</b-button>
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
/* padding-top: 5%; */
display: block;
margin: auto;
width: 50%;
}
</style>
