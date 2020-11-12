<template>
  <b-row class="welcome h-100">
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
  </b-row>
</template>

<script>
export default {
  name: `Welcome`,
  components: {},
  computed: {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.card {
  background-color: $white;
  color: $green;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.5);
}
.card-title {
  font-weight: 900;
  font-size: 30px;
}
.card img {
  width: 100%;
}
</style>
