<template>
  <b-row class="mx-auto justify-content-center">
    <b-col cols="12">
      <b-card title="Guests" class="text-center mt-2">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <font-awesome-icon icon="plus-circle" class="m-3" />
          </div>
          <div class="d-flex flex-row align-items-center">
            <b-form-input class="mx-2" placeholder="Search"></b-form-input>
            <div v-if="weightScreen > 375">
              <font-awesome-icon icon="search" class="m-3" />
            </div>
          </div>
        </div>
        <b-table :items="event.guests" :fields="fields" striped responsive="sm" v-if="weightScreen < 800">
          <template #cell(show_details)="row">
            <b-button size="sm" @click="row.toggleDetails" class="mr-2">
              {{ row.detailsShowing ? "Hide" : "Show" }} Details
            </b-button>
          </template>
          <template #row-details="row">
            <b-card>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Email:</b></b-col>
                <b-col>{{ row.item.email }}</b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Phone:</b></b-col>
                <b-col>{{ row.item.phone }}</b-col>
              </b-row>
            </b-card>
          </template>
          </b-table>
        <b-table :items="event.guests" :fields="fieldsComplete" striped responsive="sm" v-else>
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
        "name",
        "username",
        { key: "show_details", sortable: false, label: "" },
      ],
      fieldsComplete: ["name", "username", "email", "phone"],
      event: {
        guests: [
          {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            address: {
              street: "Kulas Light",
              suite: "Apt. 556",
              city: "Gwenborough",
              zipcode: "92998-3874",
              geo: {
                lat: "-37.3159",
                lng: "81.1496",
              },
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
            company: {
              name: "Romaguera-Crona",
              catchPhrase: "Multi-layered client-server neural-net",
              bs: "harness real-time e-markets",
            },
          },
          {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv",
            address: {
              street: "Victor Plains",
              suite: "Suite 879",
              city: "Wisokyburgh",
              zipcode: "90566-7771",
              geo: {
                lat: "-43.9509",
                lng: "-34.4618",
              },
            },
            phone: "010-692-6593 x09125",
            website: "anastasia.net",
            company: {
              name: "Deckow-Crist",
              catchPhrase: "Proactive didactic contingency",
              bs: "synergize scalable supply-chains",
            },
          },
        ],
      },
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
};
</script>

<style scoped lang="scss">
.card-body {
  padding-left: 0;
  padding-right: 0;
}
.svg-inline--fa {
  color: $pink;
}
</style>
