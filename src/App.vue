<template>
  <b-container fluid id="app" class="h-100">
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
</style>
