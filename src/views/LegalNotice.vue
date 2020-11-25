<template>
  <div class="col-md-12">
    <div class="card card-container px-2 pt-0">
      <div class="card-title text-center">Legal Notice</div>
      <img
        id="profile-img"
        src="../assets/logo_SE.png"
        class="profile-img-card"
      />
      <h3 class="m-4 legal-title">Website disclaimer</h3>
      <p class="m-4 text-center">
        The information contained in this website is for general information
        purposes only. The information is provided by
        <span class="business-name">GenjyStudio</span> and while we endeavour to
        keep the information up to date and correct, we make no representations
        or warranties of any kind, express or implied, about the completeness,
        accuracy, reliability, suitability or availability with respect to the
        website or the information, products, services, or related graphics
        contained on the website for any purpose. Any reliance you place on such
        information is therefore strictly at your own risk. In no event will we
        be liable for any loss or damage including without limitation, indirect
        or consequential loss or damage, or any loss or damage whatsoever
        arising from loss of data or profits arising out of, or in connection
        with, the use of this website. Through this website you are able to link
        to other websites which are not under the control of
        <span class="business-name">GenjyStudio</span>. We have no control over
        the nature, content and availability of those sites. The inclusion of
        any links does not necessarily imply a recommendation or endorse the
        views expressed within them. Every effort is made to keep the website up
        and running smoothly. However,
        <span class="business-name">GenjyStudio</span> takes no responsibility
        for, and will not be liable for, the website being temporarily
        unavailable due to technical issues beyond our control.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: `Login`,
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {},
};
</script>


<style lang="scss" scoped>
.legal-title {
  color: $bloodColor;
  font-weight: 700;
}
.business-name {
  color: $pink;
  font-weight: 700;
}
a {
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  color: $pink !important;
}
a:hover {
  color: $green !important;
  text-decoration: none;
}

label {
  display: block;
  margin-top: 10px;
}

.card .card-container {
  background-color: $white;
}

.card {
  background-color: $white;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.5);
}

.profile-img-card {
  width: 250px;
  height: 160px;
  margin: 0 auto 10px;
  display: block;
  border-radius: 5px;
}
</style>
