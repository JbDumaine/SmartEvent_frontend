<template>
  <b-card title="Organize an event" class="text-center welcome-card">
    <EventForm />
  </b-card>
</template>
<script>
import EventForm from "../components/Event/EventForm.vue";
export default {
  components: {
    EventForm,
  },
  data() {
    return {
    };
  },
};
</script>
<style lang="scss" scoped>
.card {
  background-color: $white;
  color: $green;
  max-width: 350px !important;
  margin: 0 auto 25px;
  margin-top: 0px;
  margin-top: 50px;
  border-radius: 2px;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.5);
}
.card-body {
  padding: 0px;
}
.card-title {
  font-size: 15px;
  color: $white;
  background-color: $green;
  padding: 10px;
}
</style>