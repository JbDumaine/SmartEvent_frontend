<template>
  <div id="footer-wrapper">
    <div id="footer-container">
      <div id="copyright" class="footer-content-container" v-if="widthScreen > 800">
        <p>© Copyright 2020 - SMARTEVENT.COM | Tous droits réservés</p>
      </div>
      <div id="socials_container" class="footer-content-container">
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
      </div>
      <div
        id="footer_menu_container"
        class="footer-content-container"
        v-if="widthScreen > 800"
      >
        <ul id="nav-footer-container">
          <li class="nav-footer-item"><a href="#">Contact</a></li>
          <li class="nav-footer-item"><a href="#">Confidentialité</a></li>
          <li class="nav-footer-item"><a href="#">Mentions Légales</a></li>
          <li class="nav-footer-item"><a href="#">CGV</a></li>
        </ul>
      </div>
    </div>
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
ul{
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