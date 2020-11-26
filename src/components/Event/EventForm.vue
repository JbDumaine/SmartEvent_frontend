<template>
  <div class="p-4">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="event-form">
      <b-form-group
        id="input-group-event-type"
        label="Event type:"
        label-for="input-event-type"
      >
        <b-form-select
          id="input-event-type"
          v-model="eventForm.type"
          :options="eventTypes"
          required
        ></b-form-select>
      </b-form-group>
      <b-row>
        <b-col cols="6">
          <b-form-group
            id="input-group-event-date"
            label="Event date:"
            label-for="input-event-date"
          >
            <b-form-datepicker
              id="input-event-date"
              v-model="eventForm.eventDate"
              size="sm"
              :date-format-options="{
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              }"
              required
            ></b-form-datepicker>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group
            id="input-group-event-time"
            label="Event time:"
            label-for="input-event-time"
          >
            <b-form-timepicker
              id="input-event-time"
              size="sm"
              v-model="eventForm.eventTime"
              required
            ></b-form-timepicker>
          </b-form-group>
        </b-col>
      </b-row>
      <b-form-group
        id="input-group-event-title"
        label="Event Title:"
        label-for="input-event-title"
      >
        <b-form-input
          id="input-event-title"
          v-model="eventForm.title"
          type="text"
          required
          placeholder="Enter a title"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-event-location"
        label="Event location:"
        label-for="input-event-location"
      >
        <b-form-input
          id="input-event-location"
          v-model="eventForm.location"
          type="text"
          required
          placeholder="Enter a location"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-event-items"
        label="Needed Stuff:"
        label-for="input-event-items"
      >
        <b-form-select
          id="input-event-items"
          v-model="eventForm.items"
          :options="eventItems"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-textarea
        id="textarea"
        v-model="eventForm.description"
        placeholder="Enter your event's description..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      <b-col cols="12" class="text-center">
        <b-button class="mt-3" variant="secondary" v-b-modal.add-friend-modal
          >Friends</b-button
        >
      </b-col>
      <b-row class="my-3">
        <b-col cols="6">
          <b-button class="w-100" type="reset" variant="danger">Reset</b-button>
        </b-col>
        <b-col cols="6">
          <b-button class="w-100" type="submit" variant="primary"
            >Save</b-button
          >
        </b-col>
      </b-row>
    </b-form>
    <AddFriendModal />
  </div>
</template>

<script>
import AddFriendModal from "./AddFriendModal"
export default {
  components: {
    AddFriendModal,
  },
  data() {
    return {
      eventForm: {
        title: null,
        type: null,
        location: null,
        description: null,
        eventDate: null,
        eventTime: null,
        friends: [],
        items: null,
      },
      eventTypes: [
        { text: "Select One", value: null },
        "Partie fine",
        "Zapoii",
        "Soirée Pyjama",
        "Soirée cinoche",
      ],
      eventItems: [
        { text: "Select One", value: null },
        "Coca",
        "Vodka",
        "Filles de joie",
        "Farine pour le nez",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$emit("submitEvent", this.eventForm);
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.eventForm.title = null;
      this.eventForm.type = null;
      this.eventForm.location = null;
      this.eventForm.description = null;
      this.eventForm.eventDate = null;
      this.eventForm.eventTime = null;
      this.eventForm.friends = null;
      this.eventForm.items = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.event-form {
  padding: 5px;
  color: $green;
}
</style>