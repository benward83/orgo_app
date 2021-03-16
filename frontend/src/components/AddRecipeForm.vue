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
          <h6>Add tags...</h6>
          <b-form-tags input-id="tags-basic" v-model="tags"></b-form-tags>
        </div>

        <!-- Text area -->
        <div>
          <h6>Ingredients</h6>
            <b-form-textarea
              id="ingredient-textarea"
              v-model="ingredients"
              placeholder="Ingredient list..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
        </div>

        <div>
          <h6>Method</h6>
            <b-form-textarea
              id="description-textarea"
              v-model="description"
              placeholder="description..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
        </div>

          <!-- Btns -->

        <div class="rating mt-3">
          <h6 class="form-text">Please rate this recipe</h6>
          <b-form-rating v-model="recipeRating" variant="warning" class="mb-2">
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
      name: '',
      time: '',
      servings: '',
      tags: [],
      ingredients: '',
      description: '',
      recipeRating: '',
    };
  },
};
</script>

<style>

</style>
