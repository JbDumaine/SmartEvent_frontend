<template>
  <b-row class="mx-auto justify-content-center mt-5">
    <b-col cols="12">
      <b-card class="text-center mt-2">
        <b-card-title
          >Welcome to the party of {{ event.organizer }}
          <h2>{{ event.title }}</h2></b-card-title
        >
        <b-container class="">
          <b-row class="d-flex justify-content-end">
            <font-awesome-icon
              v-if="itemsCount > 0"
              icon="carrot"
              v-b-modal.shopping_modal
              class="mb-3"
            />
            <font-awesome-icon
              icon="users"
              v-b-modal.guests_modal
              class="mb-3"
            />
          </b-row>
          <b-row>
            <b-col md="6" class="d-flex flex-column justify-content-center">
                <div class="border-bottom mb-3">
                  <h4>When</h4>
                  <h5>{{ event.date }}</h5>
                  <h5>{{ event.heure }}</h5>
                </div>
                <div class="border-bottom mb-3">
                  <h4>Where</h4>
                  <h5>{{ event.address.street }}</h5>
                  <h5 v-if="event.address.suite">{{ event.address.suite }}</h5>
                  <h5>{{ event.address.city }}</h5>
                  <h5>{{ event.address.zipcode }}</h5>
                </div>
            </b-col>
            <b-col md="6" class="text-center" v-if="this.event.guests">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.1799356525235!2d1.4584814154737764!3d43.58196827912379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebc67b217765f%3A0xc87c7c7e8a14c9a9!2s62%20Rue%20du%20Midi%2C%2031400%20Toulouse!5e0!3m2!1sfr!2sfr!4v1606315912677!5m2!1sfr!2sfr"
                width="300"
                height="225"
                frameborder="0"
                style="border: 0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </b-col>
          </b-row>
          <b-row class="border-top-sm pt-2">
            <b-card-text class="p-3">
              {{ event.description }}
            </b-card-text>
          </b-row>
        </b-container>
      </b-card>
      <b-modal id="guests_modal" title="Guests">
        <div v-for="guest in this.event.guests" :key="guest.id">
          {{ guest.name }}
        </div>
      </b-modal>
      <b-modal id="shopping_modal" title="Shopping">
        <div v-for="item in this.event.items" :key="item.id">
          {{ item.name }} x {{ item.quantity }}
        </div>
      </b-modal>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "EventDetail",
  data() {
    return {
      showLess: true,
      event: {
        id: 1,
        title: "Etienne's Birthday",
        date: "10-11-2020",
        heure: "19h00",
        organizer: "Etienne Noroy",
        description:
          "Welcome to my Birthday Party, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel urna quis arcu vehicula aliquam at quis tellus. Sed vitae faucibus nulla, in sollicitudin leo. Morbi tincidunt massa eget eros mollis fringilla. Etiam imperdiet magna eu sapien consequat, id varius elit porta. Vestibulum suscipit turpis at ligula convallis ultricies. Suspendisse interdum metus ut tortor varius, at rutrum velit faucibus. Nunc laoreet leo ultrices, sagittis neque scelerisque, dapibus libero. Aliquam congue metus ac accumsan pulvinar. Mauris neque ante, facilisis eget imperdiet sit amet, luctus vel nulla. ",
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
        type: "Birthday party",
        items: [
          { name: "Coca", quantity: 1 },
          { name: "Whisky", quantity: 2 },
          { name: "Vodka", quantity: 5 },
        ],
        guests: [
          {
            id: 1,
            name: "Jean Baptiste Talu",
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
            name: "Jean Marc Talu",
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
          {
            id: 3,
            name: "Jean Louis Talu",
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
            id: 4,
            name: "Jean Luc Talu",
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
            id: 5,
            name: "Jean Pierre Talu",
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
            id: 6,
            name: "Jean Pascal Talu Junior",
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
        ],
      },
    };
  },
  computed: {
    guestsCount() {
      return this.event.guests.length;
    },
    itemsCount() {
      return this.event.items.length;
    },
  },
};
</script>

<style scoped lang="scss">
@media (max-width: 640px) {
  .svg-inline--fa {
    color: $pink;
    width: 30px;
    height: 30px;
    margin-right: 30px;
  }

  .text-center.col-md-6 {
    margin-bottom: 20px;

    iframe {
      width: 200px;
      height: 150px;
    }
  }
}
h2 {
  color: $pink;
  font-weight: bold;
}
h4 {
  color: $blue;
  font-weight: bold;
}
.svg-inline--fa {
  color: $pink;
  width: 25px;
  height: 25px;
  margin-right: 30px;
}

.text-center.col-md-6 {
  display: flex;
  justify-content: center;
  align-items: center;
}

h5,
h6,
p,
span {
  font-size: 20px;
  text-align: center;
}
button,
a {
  font-family: "Work Sans", sans-serif;
}

.card {
  background-color: $white !important;
}
label {
  display: block;
  margin-top: 10px;
}

.card-title {
  text-align: center;
  font-weight: $titleWeight;
  color: $green;
  margin-bottom: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.edit-button {
  position: absolute;
  right: 0;
  margin-right: 50px;
}

.modal-items {
  font-size: 1rem;
  color: $green;
}
</style>
