<template>
<div class="larderForm">
  <div id="text-holder">
  <h1>What's in your Larder?</h1>
  <br>
  <p>Please pop a few ingrediants in and we'll recommend some tasty dishes to cook up!</p>
  </div>
<form>
  <div class="form-group">
    <br>
    <input class="form-control" type="text" placeholder="Item">
    <input class="form-control" type="text" placeholder="Item">
    <input class="form-control" type="text" placeholder="Item">
    <input class="form-control" type="text" placeholder="Item">
    <input class="form-control" type="text" placeholder="Item">
    <input class="form-control" type="text" placeholder="Item">
    <input class="form-control" type="text" placeholder="Item">
    <input class="form-control" type="text" placeholder="Item">
  </div>
     <b-button pill variant="success">Submit</b-button>
</form>
</div>
</template>

<script>

</script>

<style lang="scss" scoped>
.larderForm {
max-width: 1000px;
padding-top: 5%;
display: block;
margin: auto;
width: 50%;
}

#text-holder {
display: block;
margin: auto;
width: 50%;
}
</style>
