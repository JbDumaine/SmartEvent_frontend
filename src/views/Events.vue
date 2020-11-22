<template>
  <b-row class="mx-auto justify-content-center">
    <b-col cols="12">
      <b-card title="Events" class="text-center mt-2">
        <div class="d-flex justify-content-between align-items-center">
          <b-link to="/create/event">
            <font-awesome-icon icon="plus-circle" class="m-3"/>
          </b-link>
          <div class="d-flex flex-row align-items-center">
            <b-form-input class="mx-2" placeholder="Search"></b-form-input>
            <div v-if="weightScreen > 375">
              <font-awesome-icon icon="search" class="m-3" />
            </div>
          </div>
        </div>
        <b-table :items="events" :fields="fields" striped responsive="sm">
          <template #cell(show_details)="row">
            <b-button size="sm" @click="row.toggleDetails" class="mr-2">
              {{ row.detailsShowing ? "Hide" : "Show" }} Details
            </b-button>
          </template>
          <template #row-details="row">
            <b-card>
              <b-row class="mb-2">
                <b-col sm="4" md="3" class="text-center-sm-left font-weight-bold">Date :</b-col>
                <b-col sm="8" md="9" class="text-center-sm-left">{{ row.item.date }}</b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col sm="4" md="3" class="text-center-sm-left font-weight-bold">Heure :</b-col>
                <b-col sm="8" md="9" class="text-center-sm-left">{{ row.item.heure }}</b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col sm="4" md="3" class="text-center-sm-left font-weight-bold">Address:</b-col>
                <b-col sm="8" md="9" class="text-center-sm-left">{{ row.item.address.street }}({{row.item.address.suite }}), {{ row.item.address.city }}</b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col sm="4" md="3" class="text-center-sm-left font-weight-bold">Description:</b-col>
                <b-col sm="8" md="9" class="text-center-sm-left" >{{ row.item.description }}</b-col>
              </b-row>
            </b-card>
          </template>
        </b-table>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: `Guest`,
  data() {
    return {
      fields: [
        "title",
        "organizer",
        { key: "show_details", sortable: false, label: "" },
      ],
      events: [
        {
          id: 1,
          title: "Etienne's Birthday",
          date: "10-11-2020",
          heure:"19h00",
          organizer: "Etienne Noroy",
          description: "Welcome to my Birthday Party",
          address: {
            street: "Rue du Paradie",
            suite: "Apt. 25",
            city: "Nuage City",
            zipcode: "64584-54544",
            geo: {
              lat: "-37.3159",
              lng: "81.1496",
            },
          },
          type: "birthday party",
        },
        {
          id: 2,
          title: "Jb party",
          date: "01-12-2020",
          heure:"22h00",
          organizer: "Jb Lemaine",
          description: "Come to my appartment for a great party ! ",
          address: {
            street: "26 Rue du midi",
            suite: "Apt. 74",
            city: "Toulouse",
            zipcode: null,
            geo: {
              lat: "-39.3159",
              lng: "80.1496",
            },
          },
          type: "Party with friends",
        },
      ],
    };
  },
  components: {},
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    weightScreen() {
      return this.$store.state.weightScreen;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push(`/welcome`);
    }
  },
  methods : {
    createEvent(){
      this.$router.push("/create/event");
    }
  }
};
</script>

<style scoped lang="scss">
.card-body {
  padding-left: 0;
  padding-right: 0;
}
.svg-inline--fa {
  color: $pink;
  width: 25px;
  height: 25px;
}
</style>
