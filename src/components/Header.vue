<template>
  <div>
    <b-navbar toggleable="lg" class="main-nav">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/events">Events</b-nav-item>
          <b-nav-item to="/friends">Friends</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/legal-notice">Legal Notice</b-nav-item>
          <b-nav-item id="logout-item-nav">Logout</b-nav-item>
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
a {
  color: $white;
  font-size: 20px;
  margin-right: 5px;
  margin-left: 5px;
}

.router-link-exact-active {
  color: $blue;
  font-weight: bold;
  text-decoration: none;
}

.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link:focus {
  color: white;
}

.nav-item:hover,
.nav-item:focus {
  background-color: $green;
}
#logout-item-nav {
  background-color: $blue;
}

#logout-item-nav:hover {
  background-color: $bloodColor;
}
</style>