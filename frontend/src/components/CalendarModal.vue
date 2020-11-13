<template>
  <div>

    <b-button pill variant="info" @click="$bvModal.show('modal-scoped')">Go to daily plan</b-button>

    <b-modal id="modal-scoped">
      <template #modal-header="{ close }">
        <!-- Emulate built in modal header close button action -->
        <b-button size="sm" variant="outline-danger" @click="close()">
          Close weekday
        </b-button>
        <h5>Monday</h5>
      </template>

      <template>
        <div>
          <b-form-textarea
            id="textarea-rows"
            placeholder="Food for today"
            rows="8"
          ></b-form-textarea>
        </div>
      </template>

      <template #modal-footer="{ ok, cancel, hide }">
        <b>What to do next</b>
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="sm" variant="success" @click="ok()">
          Save
        </b-button>
        <b-button size="sm" variant="danger" @click="cancel()">
          Cancel
        </b-button>
        <!-- Button with custom close trigger value -->
        <b-button size="sm" variant="outline-secondary" @click="hide('forget')">
          Save as Template
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ['days'],
};
</script>
