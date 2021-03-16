<template>
  <div class="add-recipe-container">
    <div class="recipe-form-container">
      <form @submit.prevent="submit" class="recipe-form-control" action="submit">
        <h2 class="form-title">Add a recipe</h2>

        <!-- inputs -->

        <div class="form-input">
          <b-form-input
            class="mt-2"
            v-model.trim="name"
            placeholder="Recipe name"
          ></b-form-input>
        </div>
        <div class="form-input">
          <b-form-input
            class="mt-2"
            v-model.trim="time"
            placeholder="Preperation time"
          ></b-form-input>
        </div>
        <div class="form-input">
          <b-form-input
            class="mt-2"
            v-model.trim="servings"
            placeholder="No. of servings"
          ></b-form-input>
        </div>

          <!-- Tags -->

        <div class="recipe-form-tags">
          <h6>Add a tag</h6>
          <b-form-tags input-id="tags-basic" v-model="tags"></b-form-tags>
        </div>

        <!-- Text area -->

        <div>
          <h6>Please leave a description of the recipe</h6>
            <b-form-textarea
              id="textarea"
              v-model="description"
              placeholder="Enter something..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
            <pre class="mt-3 mb-0">{{ text }}</pre>
        </div>

          <!-- Btns -->

        <div class="form-dropdown mt-3">
          <b-form-select v-model="selected" :options="options"></b-form-select>
        </div>
        <div class="rating mt-3">
          <h6 class="form-text">Please rate this recipe</h6>
          <b-form-rating v-model="value" variant="warning" class="mb-2">
          </b-form-rating>
        </div>
        <div class="form-btns mt-3">
          <b-button @click="$router.push('/')" class="cancel" variant="danger"
            >Cancel</b-button
          >
          <b-button class="submit" variant="success">Submit</b-button>
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
      tags: [],
      description: '',
    };
  },
};
</script>

<style>

</style>
