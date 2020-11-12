<template>
  <div class="col-md-12">
    <b-card
      :title="title"
      img-src="../assets/logo_SE.png"
      img-alt="Smart Event Logo"
      img-top
      class="mb-2"
    >
      <b-card-text class="mt-4">
        {{ eventOwner.event.message }}
      </b-card-text>
      <b-row class="mt-5">
        <b-col cols="5">
          <b-button variant="success" v-b-modal.accept_modal>Accept</b-button>
        </b-col>
        <b-col cols="5" offset="2">
          <b-button variant="danger" v-b-modal.decline_modal>Decline</b-button>
        </b-col>
      </b-row>
    </b-card>

    <b-modal id="decline_modal" hide-footer hide-header>
      <p id="modal_invitation_decline" class="my-4 text-center modal-invitation">{{eventOwner.name}} is very sad ! <font-awesome-icon icon="sad-cry" /></p>
    </b-modal>
    
    <b-modal id="accept_modal" hide-footer hide-header>
      <p id="modal_invitation_accept" class="my-4 text-center modal-invitation">{{eventOwner.name}} is very happy ! <font-awesome-icon icon="smile-beam" /></p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: `Invitation`,
  data() {
    return {
      eventOwner: {
        name: "Boby",
        event: {
          message:
            "Coucou etiennou tu veux venir a ma soirée pyjama sans pyjama ?",
        },
      },
    };
  },
  computed: {
    title() {
      return `${this.eventOwner.name} invites you to an event ! `;
    },
  },
  methods: {},
};
</script>


<style lang="scss" scoped>

.card {
  background-color: $white;
  color: $green;
  max-width: 350px !important;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 0px;
  margin-top: 50px;
  border-radius: 2px;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.5);
}

.modal-invitation{
  font-size: 2rem;
  font-weight: $titleWeight;
}
#modal_invitation_decline {
  color: $bloodColor;
}

#modal_invitation_accept {
  color: $silverTree;
}
</style>
