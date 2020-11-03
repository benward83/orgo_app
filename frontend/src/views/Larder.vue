<template>
<div class="larder">
<Navbar />
<br>
<LarderForm />
</div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import LarderForm from '@/components/LarderForm.vue';

export default {
  name: 'larder',
  components: {
    Navbar,
    LarderForm,
  },

};
</script>

<style>

</style>
