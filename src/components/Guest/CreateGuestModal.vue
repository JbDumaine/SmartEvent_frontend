<template>
  <b-modal id="create-guest-modal" ref="create-guest-modal" hide-footer title="Create a Guest" size="lg">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="guest-form">
      <b-row>
        <b-col cols="12" lg="6" >
          <b-form-group
            id="input-group-guest-last-name"
            label="Last Name:"
            label-for="input-guest-last-name"
          >
            <b-form-input
              id="input-guest-last-name"
              v-model="guestForm.lastName"
              type="text"
              placeholder="Guest's last name"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12" lg="6">
          <b-form-group
            id="input-group-guest-first-name"
            label="First Name:"
            label-for="input-guest-first-name"
          >
            <b-form-input
              id="input-guest-first-name"
              v-model="guestForm.firstName"
              type="text"
              placeholder="Guest's first name"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12" lg="6">
          <b-form-group
            id="input-group-guest-email"
            label="Email:"
            label-for="input-guest-email"
          >
            <b-form-input
              id="input-guest-email"
              v-model="guestForm.email"
              type="email"
              placeholder="Guest's email"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12" lg="6">
          <b-form-group
            id="input-group-guest-phone"
            label="Phone:"
            label-for="input-guest-phone"
          >
            <b-form-input
              id="input-guest-phone"
              v-model="guestForm.phone"
              type="text"
              required
              placeholder="Guest's phone number"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12 text-center mt-3" >
          <b-button class="w-100" type="submit" variant="primary" 
            >Save</b-button
          >
        </b-col>
      </b-row>
    </b-form>
  </b-modal>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      guestForm: {
        lastName: null,
        firstName: null,
        email: null,
        phone: null,
      },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$emit("submitGuestEvent", this.guestForm);
      this.$refs['create-guest-modal'].hide()
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values

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
::v-deep #create-guest-modal {
    color:$green;
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