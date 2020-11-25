<template>
  <div>
    <b-row class="mx-auto justify-content-center mt-5">
      <b-col cols="12">
        <b-card title="Friends" class="text-center mt-2">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <font-awesome-icon
                v-b-modal.create-friend-modal
                icon="plus-circle"
                size="lg"
                class="m-3 plus-circle-icon"
              />
            </div>
            <div class="d-flex flex-row align-items-center">
              <b-form-input class="mx-2" placeholder="Search"></b-form-input>
              <div v-if="widthScreen > 375">
                <font-awesome-icon icon="search" class="m-3" />
              </div>
            </div>
          </div>
          <b-table
            :items="friends"
            :fields="fields"
            striped
            responsive="sm"
            v-if="widthScreen < 800"
          >
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
                <b-row class="mb-2 justify-content-center">
                  <font-awesome-icon icon="edit" class="m-3" />
                  <font-awesome-icon icon="trash" class="m-3" />
                </b-row>
              </b-card>
            </template>
          </b-table>
          <b-table
            :items="friends"
            :fields="fieldsComplete"
            striped
            responsive="sm"
            v-else
          >
          </b-table>
        </b-card>
      </b-col>
    </b-row>
    <CreateFriendModal @submitFriendEvent="submitFriendForm" />
  </div>
</template>

<script>
import CreateFriendModal from "../components/Friend/CreateFriendModal";
export default {
  name: `Friends`,
  components: {
    CreateFriendModal,
  },
  data() {
    return {
      fields: [
        "lastName",
        "firstName",
        { key: "show_details", sortable: false, label: "" },
      ],
      fieldsComplete: ["firstName", "lastName", "email", "phone"],
        friends: [
          {
            id: 1,
            lastName: "Leanne Graham",
            firstName: "Bret",
            email: "Sincere@april.biz",
            phone: "1-770-736-8031 x56442",
          },
          {
            id: 2,
            lastName: "Ervin Howell",
            firstName: "Antonette",
            email: "Shanna@melissa.tv",
            phone: "010-692-6593 x09125",
          },
        ],
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    widthScreen() {
      return this.$store.state.widthScreen;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push(`/welcome`);
    }
  },
  methods: {
    submitFriendForm(newFriend) {
      this.event.Friends.push(newFriend);
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
