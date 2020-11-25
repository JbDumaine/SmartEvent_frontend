<template>
  <b-modal
    id="create-event-modal"
    ref="create-event-modal"
    hide-footer
    title="Create an Event"
    size="lg"
  >
    <EventForm @submitEvent="submitEventForm" />
  </b-modal>
</template>
<script>
import EventForm from "./EventForm.vue";
export default {
  components: {
    EventForm,
  },
  props: {
    events: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push(`/welcome`);
    }
  },
  methods: {
    submitEventForm(newEvent) {
      this.events.push(newEvent);
      this.$refs['create-event-modal'].hide()
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep #create-event-modal {
  header {
    text-align: center;
    color: $white;
    background-color: $green;
    button {
      color: $white;
    }
  }
}
</style>