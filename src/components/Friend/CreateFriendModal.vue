<template>
  <b-modal id="create-friend-modal" ref="create-friend-modal" hide-footer title="Create a friend" size="lg">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="friend-form">
      <b-row>
        <b-col cols="12" lg="6" >
          <b-form-group
            id="input-group-friend-last-name"
            label="Last Name:"
            label-for="input-friend-last-name"
          >
            <b-form-input
              id="input-friend-last-name"
              v-model="friendForm.lastName"
              type="text"
              placeholder="friend's last name"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12" lg="6">
          <b-form-group
            id="input-group-friend-first-name"
            label="First Name:"
            label-for="input-friend-first-name"
          >
            <b-form-input
              id="input-friend-first-name"
              v-model="friendForm.firstName"
              type="text"
              placeholder="friend's first name"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12" lg="6">
          <b-form-group
            id="input-group-friend-email"
            label="Email:"
            label-for="input-friend-email"
          >
            <b-form-input
              id="input-friend-email"
              v-model="friendForm.email"
              type="email"
              placeholder="friend's email"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12" lg="6">
          <b-form-group
            id="input-group-friend-phone"
            label="Phone:"
            label-for="input-friend-phone"
          >
            <b-form-input
              id="input-friend-phone"
              v-model="friendForm.phone"
              type="text"
              required
              placeholder="friend's phone number"
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
      friendForm: {
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
      this.$emit("submitFriendEvent", this.friendForm);
      this.$refs['create-friend-modal'].hide()
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
::v-deep #create-friend-modal {
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