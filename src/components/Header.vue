<template>
  <div>
    <b-navbar toggleable="lg" class="main-nav">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">Events</b-nav-item>
          <b-nav-item href="#">Guests</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Legal Notice</b-nav-item>
          <b-nav-item id="logout-item-nav" href="#">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: `Header`,
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main-nav {
  background-color: $pink;
}
::v-deep .navbar-light .navbar-nav .nav-link {
  color: $white;
}
.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link:focus {
  color: white;
  background-color: $green;
}
#logout-item-nav {
    background-color: $blue;
}
</style>