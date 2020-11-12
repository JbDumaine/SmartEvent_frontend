<template>
  <b-container id="app" class="h-100 my-auto">
    <router-view />
  </b-container>
</template>

<style lang="scss">
html {
  height: 100%;
}
body {
  height: 100%;
}
.btn-primary {
  background-color: $blue !important;
  border-color: $blue !important;
}
.btn-primary:hover {
  background-color: $lightBlue !important;
  border-color: $lightBlue !important;
}
.btn-secondary {
  background-color: $pink !important;
  border-color: $pink !important;
}

.btn-secondary:hover {
  background-color: $lightPink !important;
  border-color: $lightPink !important;
}

.btn-danger {
  background-color: $bloodColor !important;
  border-color: $bloodColor !important;
}

.btn-danger:hover {
  background-color: $lightBloodColor !important;
  border-color: $lightBloodColor !important;
}

.btn-success {
  background-color: $silverTree !important;
  border-color: $silverTree !important;
}

.btn-success:hover {
  background-color: $lightSilverTree!important;
  border-color: $lightSilverTree !important;
}
.card-title {
  font-weight: $titleWeight;
  font-size: 30px;
  color: $green;
}

</style>
