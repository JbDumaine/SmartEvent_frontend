<template>
  <div class="home">
   
  </div>
</template>

<script>



export default {
  name: `Home`,
  components: {

  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push(`/welcome`)
    }
  }
}
</script>
