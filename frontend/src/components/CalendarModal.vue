<template>
<div>
  <div>
    <b-button v-b-modal.modal-scrollable
              pill variant="info"
              @trigger="weekday.show = !weekday.show">
                Go to daily plan</b-button>

    <b-modal
      id="modal-scrollable"
      scrollable title="Scrollable Content"
        >

        <b-form-textarea
        id="textarea"
        v-model="text"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>

      <pre class="mt-3 mb-0">{{ text }}</pre>
    </b-modal>
  </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      weekdays: [
        { id: 1, name: 'mon', show: false },
        { id: 2, name: 'tues', show: false },
        { id: 3, name: 'wed', show: false },
        { id: 4, name: 'thur', show: false },
        { id: 5, name: 'fri', show: false },
        { id: 6, name: 'sat', show: false },
        { id: 7, name: 'sun', show: false },
      ],
    };
  },
};
</script>
