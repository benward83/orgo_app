<template>
<div id="larder">
<Navbar />
<br>
<LarderHeader />
<LarderForm />
</div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import LarderForm from '@/components/LarderForm.vue';
import LarderHeader from '@/components/LarderHeader.vue';

export default {
  name: 'larder',
  components: {
    Navbar,
    LarderForm,
    LarderHeader,
  },

};
</script>
