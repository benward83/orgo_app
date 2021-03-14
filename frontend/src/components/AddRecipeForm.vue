<template>
  <div id="form-container">
    <div>
      <form @submit.prevent="submit" class="form-control" action="submit">
        <h2 class="form-title">Add a recipe</h2>

        <!-- inputs -->

        <div class="form-input">
          <b-form-input
            class="mt-2"
            v-model.trim="artist"
            placeholder="Artist"
          ></b-form-input>
        </div>
        <div class="form-input">
          <b-form-input
            class="mt-2"
            v-model.trim="album"
            placeholder="Album name"
          ></b-form-input>
        </div>
        <div class="form-input">
          <b-form-input
            class="mt-2"
            v-model.trim="track"
            placeholder="Track name"
          ></b-form-input>
        </div>
        <div class="form-input">
          <b-form-input
            class="mt-2"
            v-model.trim="recordLabel"
            placeholder="Record label"
          ></b-form-input>
        </div>

        <!-- dropdown -->

        <div class="form-dropdown mt-3">
          <b-form-select v-model="selected" :options="options"></b-form-select>
        </div>
        <div class="rating mt-3">
          <h4 class="form-text">Please rate this recipe</h4>
          <b-form-rating v-model="value" variant="warning" class="mb-2">
          </b-form-rating>
        </div>
        <div class="form-btns mt-3">
          <b-button @click="$router.push('/')" class="cancel" variant="danger"
            >Cancel</b-button
          >
          <b-button class="orgo-form-btn" variant="success">Submit</b-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AddRecipeForm',
  components: {},
  data() {
    return {

    };
  },
};
</script>

<style>

</style>
