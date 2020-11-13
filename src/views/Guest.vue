<template>
  <b-row class="mx-auto justify-content-center">
    <b-col cols="12">
    <b-card title="Guests" class="text-center mt-2">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <font-awesome-icon icon="plus-circle" class="m-3"/>
          </div>
          <div class="d-flex flex-row align-items-center">
          <b-form-input class="mx-2" placeholder="Search"></b-form-input>
          <div v-if="weightScreen > 375">
            <font-awesome-icon icon="search" class="m-3"/>
          </div>
          </div>
        </div>
      <b-table striped hover :items="items" class="col-12"> </b-table>
    </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: `Guest`,
  data() {
    return {
      items: [
        { first_name: "Etienne", last_name: "Noroy", telephone_number:"0785406084"},
        { first_name: "Larsen", last_name: "Shaw", telephone_number:"0608904512"},
        { first_name: "Geneva", last_name: "Wilson", telephone_number:"0608880500"},
        { first_name: "Jami", last_name: "Carney", telephone_number:"0605805045"},
      ],
    };
  },
  components: {},
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
      weightScreen(){

        return this.$store.state.weightScreen;
      }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push(`/welcome`);
    }
  },
};
</script>

<style scoped lang="scss">
.card-body {
  padding-left: 0;
  padding-right: 0;
}
.svg-inline--fa{
  color:$pink
}
</style>
