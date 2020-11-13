<template>
  <b-col cols="12" class="my-auto">
    <b-card title="Welcome to Smart Event" class="text-center welcome-card">
      <img id="logo-img" src="../assets/logo_SE.png" class="mt-4" />
      <b-card-text class="row mt-4">
        <b-col cols="12" class="mt-4">
          <router-link to="/login"
            ><b-button class="w-50" variant="primary"
              >Sign In</b-button
            ></router-link
          >
        </b-col>
        <b-col cols="12" class="mt-4">
          <router-link to="/register"
            ><b-button class="w-50">Sign Up</b-button></router-link
          >
        </b-col>
      </b-card-text>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: `Welcome`,
  components: {},
  mounted() {},
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push(`/home`);
    }
  },
};
</script>
<style lang="scss" scoped>
.card {
  background-color: $white;
  color: $green;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 0px;
  margin-top: 50px;
  border-radius: 2px;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.5);
}

.card img {
  width: 100%;
  max-width: 500px;
}
</style>
