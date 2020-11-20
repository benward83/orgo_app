<template>
  <div>
    <br>
    <label for="tags-basic">Please add tags to your recipe if you like</label>
    <b-form-tags input-id="tags-basic" v-model="value"></b-form-tags>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ['weekend', 'cheap & cheerful'],
    };
  },
};
</script>
