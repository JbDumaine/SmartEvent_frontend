<template>
  <div id="footer-wrapper">
    <b-row id="footer-container">
      <b-col lg="4" cols="12" id="copyright" class="text-center ">
        <p>© Copyright 2020 - SMARTEVENT.COM | All rights reserved</p>
      </b-col>
      <b-col
        lg="4"
        cols="12"
        id="socials_container"
        class="text-center mt-2"
      >
        <img
          src="../../public/img/icons/facebook-app-symbol.png"
          alt=""
          class="social-item"
        />
        <img
          src="../../public/img/icons/instagram.png"
          alt=""
          class="social-item"
        />
        <img
          src="../../public/img/icons/google-glass-logo.png"
          alt=""
          class="social-item"
        />
      </b-col>
      <b-col lg="4" cols="12" class="text-center mt-2">
        <ul id="nav-footer-container">
          <li class="nav-footer-item"><a href="#">Contact</a></li>
          <li class="nav-footer-item"><a href="#">Confidentiality</a></li>
          <li class="nav-footer-item"><a href="#">Legal notice</a></li>
          <li class="nav-footer-item"><a href="#">Terms and Conditions</a></li>
        </ul>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: `Footer`,
  computed: {
    widthScreen() {
      return this.$store.state.widthScreen;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
a {
  font-size: 10px;
}
ul {
  padding-left: 0;
}
#footer-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #f0f0f0;
  padding-top: 20px;
  padding-bottom: 10px;
}

.footer-content-container {
  width: 33%;
}

#nav-footer-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.nav-footer-item {
  list-style: none;
}

.nav-footer-item > a {
  text-decoration: none;
  color: #000000;
}

#copyright {
  font-size: 10px;
}

#socials_container {
  display: flex;
  justify-content: center;
}

#socials_container > img:nth-child(2) {
  margin: 0px 15px;
}

.social-item {
  width: 32px;
  height: 32px;
}
</style>