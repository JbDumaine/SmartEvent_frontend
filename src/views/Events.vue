<template>
  <div>
    <b-row class="mx-auto justify-content-center mt-5">
      <b-col cols="12">
        <b-card title="My Events" class="text-center mt-2">
          <div class="d-flex justify-content-between align-items-center">
            <font-awesome-icon
              icon="plus-circle"
              size="lg"
              class="m-3 plus-circle-icon"
              v-b-modal.create-event-modal
            />
            <div class="d-flex flex-row align-items-center">
              <b-form-input class="mx-2" placeholder="Search"></b-form-input>
            </div>
          </div>
          <b-table :items="myEvents" :fields="fields" striped responsive="sm">
            <template #cell(show_details)="row">
              <font-awesome-icon
                @click="row.toggleDetails"
                icon="info-circle"
                class="info-circle-icon"
                size="lg"
              />
            </template>
            <template #row-details="row">
              <b-card>
                <b-row class="mb-2">
                  <b-col
                    sm="4"
                    md="3"
                    class="text-center-sm-left font-weight-bold"
                    >Date :</b-col
                  >
                  <b-col sm="8" md="9" class="text-center-sm-left">{{
                    row.item.eventDate
                  }}</b-col>
                </b-row>
                <b-row class="mb-2">
                  <b-col
                    sm="4"
                    md="3"
                    class="text-center-sm-left font-weight-bold"
                    >Time :</b-col
                  >
                  <b-col sm="8" md="9" class="text-center-sm-left">{{
                    row.item.eventTime
                  }}</b-col>
                </b-row>
                <b-row class="mb-2">
                  <b-col
                    sm="4"
                    md="3"
                    class="text-center-sm-left font-weight-bold"
                    >Address:</b-col
                  >
                  <b-col sm="8" md="9" class="text-center-sm-left">{{
                    row.item.location
                  }}</b-col>
                </b-row>
                <b-row class="mb-2">
                  <b-col
                    sm="4"
                    md="3"
                    class="text-center-sm-left font-weight-bold"
                    >Description:</b-col
                  >
                  <b-col sm="8" md="9" class="text-center-sm-left">{{
                    row.item.description
                  }}</b-col>
                </b-row>
                <b-row class="mb-2 justify-content-center">
                  <font-awesome-icon
                    icon="edit"
                    size="lg"
                    class="m-3 edit-icon"
                    @click="goToEventDetail(row.item.id)"
                  />
                  <font-awesome-icon
                    @click="removeEvent(row)"
                    icon="trash"
                    size="lg"
                    class="m-3 trash-icon"
                  />
                </b-row>
              </b-card>
            </template>
          </b-table>
        </b-card>
      </b-col>
      <b-col cols="12" class="mt-5">
        <b-card title="Take Part" class="text-center mt-2">
          <b-table
            :items="takePartEvents"
            :fields="takePartFields"
            striped
            responsive="sm"
          >
            <template #cell(show_details)="row">
              <font-awesome-icon
                @click="row.toggleDetails"
                icon="info-circle"
                class="info-circle-icon"
                size="lg"
              />
            </template>
            <template #row-details="row">
              <b-card>
                <b-row class="mb-2">
                  <b-col
                    sm="4"
                    md="3"
                    class="text-center-sm-left font-weight-bold"
                    >Type :</b-col
                  >
                  <b-col sm="8" md="9" class="text-center-sm-left">{{
                    row.item.type
                  }}</b-col>
                </b-row>
                <b-row class="mb-2">
                  <b-col
                    sm="4"
                    md="3"
                    class="text-center-sm-left font-weight-bold"
                    >Date :</b-col
                  >
                  <b-col sm="8" md="9" class="text-center-sm-left">{{
                    row.item.eventDate
                  }}</b-col>
                </b-row>
                <b-row class="mb-2">
                  <b-col
                    sm="4"
                    md="3"
                    class="text-center-sm-left font-weight-bold"
                    >Time :</b-col
                  >
                  <b-col sm="8" md="9" class="text-center-sm-left">{{
                    row.item.eventTime
                  }}</b-col>
                </b-row>
                <b-row class="mb-2">
                  <b-col
                    sm="4"
                    md="3"
                    class="text-center-sm-left font-weight-bold"
                    >Address:</b-col
                  >
                  <b-col sm="8" md="9" class="text-center-sm-left">{{
                    row.item.location
                  }}</b-col>
                </b-row>
                <b-row class="mb-2">
                  <b-col
                    sm="4"
                    md="3"
                    class="text-center-sm-left font-weight-bold"
                    >Description:</b-col
                  >
                  <b-col sm="8" md="9" class="text-center-sm-left">{{
                    row.item.description
                  }}</b-col>
                </b-row>
                <b-row class="mb-2 justify-content-center">
                  <font-awesome-icon
                    icon="eye"
                    size="lg"
                    class="m-3 eye-icon"
                    @click="goToEventDetail(row.item.id)"
                  />
                </b-row>
              </b-card>
            </template>
          </b-table>
        </b-card>
      </b-col>
    </b-row>
    <CreateEventModal :events="myEvents" />
  </div>
</template>

<script>
import CreateEventModal from "../components/Event/CreateEventModal";
export default {
  name: `Guest`,
  components: { CreateEventModal },
  data() {
    return {
      fields: [
        "title",
        { key: "eventDate", label: "Date" },
        { key: "type", label: "Type" },
        { key: "show_details", sortable: false, label: "" },
      ],
      takePartFields: [
        "title",
        { key: "eventDate", label: "Date" },
        { key: "organizer" },
        { key: "show_details", sortable: false, label: "" },
      ],
      myEvents: [
        {
          id: 1,
          title: "Etienne's Birthday",
          eventDate: "10-11-2020",
          eventTime: "19h00",
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
          location: "Rue du Paradie(Apt. 25), Nuage City",
          type: "Birthday party",
        },
        {
          id: 2,
          title: "Jb party",
          eventDate: "01-12-2020",
          eventTime: "22h00",
          description: "Come to my appartment for a great party ! ",
          location: "26 Rue du midi(Apt. 74), Toulouse",
          type: "Party with friends",
        },
      ],
      takePartEvents: [
        {
          id: 1,
          title: "Etienne's Birthday",
          eventDate: "10-11-2020",
          eventTime: "19h00",
          organizer: "Michel Sardou",
          description: "Welcome to my Birthday Party",
          location: "Rue du Paradie(Apt. 25), Nuage City",
          type: "birthday party",
        },
        {
          id: 2,
          title: "Jb party",
          eventDate: "01-12-2020",
          organizer: "Boby Marley",
          eventTime: "22h00",
          description: "Come to my appartment for a great party ! ",
          location: "26 Rue du midi(Apt. 74), Toulouse",
          type: "Party with friends",
        },
      ],
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push(`/welcome`);
    }
  },
  methods: {
    goToEventDetail: function (id) {
      this.$router.push(`eventDetail/${id}`);
    },
    createEvent() {
      this.$router.push("/create/event");
    },
    removeEvent(row) {
      console.log(row);
      for (var i = this.myEvents.length - 1; i >= 0; --i) {
        if (this.myEvents[i].id === row.item.id) {
          this.myEvents.splice(i, 1);
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.card-body {
  padding-left: 0;
  padding-right: 0;
}
</style>
