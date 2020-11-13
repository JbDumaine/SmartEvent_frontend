<template>
  <b-modal id="add-guest-modal" hide-footer hide-header size="lg">
    <b-row>
      <b-col sm="12" md="10" lg="10" class="mb-2">
        <multiselect
          v-model="selectedGuest"
          id="ajax"
          label="name"
          track-by="id"
          placeholder="Type to search"
          open-direction="bottom"
          :options="guestsList"
          :multiple="true"
          :searchable="true"
          :loading="isLoading"
          :internal-search="false"
          :clear-on-select="false"
          :close-on-select="false"
          :options-limit="300"
          :limit="10"
          :limit-text="limitText"
          :show-no-results="false"
          :hide-selected="true"
          @search-change="asyncFind"
        >
          <template slot="tag" slot-scope="{ option, remove }"
            ><span class="custom__tag"
              ><span>{{ option.name }}</span
              ><span class="custom__remove" @click="remove(option)"
                >❌</span
              ></span
            ></template
          >
          <template slot="clear" slot-scope="props">
            <div
              class="multiselect__clear"
              v-if="selectedGuest.length"
              @mousedown.prevent.stop="clearAll(props.search)"
            ></div>
          </template>
          <span slot="noResult"
            >Oops! No elements found. Consider changing the search query.</span
          >
        </multiselect>
      </b-col>
      <b-col sm="12" md="2" lg="2" class="text-right">
        <b-button variant="primary" @click="addGuestsToEvent">Add</b-button>
      </b-col>
      <b-col cols="12" class="mt-3">
        <b-table :items="event.guests" :fields="fields" striped responsive="sm">
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

              <b-button size="sm" @click="row.toggleDetails"
                >Hide Details</b-button
              >
            </b-card>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </b-modal>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      selectedGuest: [],
      guestsList: [],
      isLoading: false,
      fields: ['name', 'username', { key: "show_details", sortable: false, label: "" },],
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
  methods: {
    limitText(count) {
      return `and ${count} other guests`;
    },
    asyncFind(query) {
      this.isLoading = true;
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          console.log(response.data);
          this.guestsList = response.data;
          this.isLoading = false;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },
    clearAll() {
      this.selectedGuest = [];
    },
    addGuestsToEvent(){
        this.selectedGuest.forEach((guest)=>{
            this.event.guests.push(guest);
        });
        this.selectedGuest = [];
    }
  },
};
</script>
<style lang="scss" scoped>
</style>