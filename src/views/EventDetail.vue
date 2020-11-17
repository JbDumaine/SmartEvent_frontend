<template>
<b-form name="form">
  <b-col cols="12" class="my-auto">
      <img id="logo-img" src="../assets/logo_SE.png"/>

    <b-card class="mb-2">
      <b-card-title>Événement {{ event.id }} </b-card-title>
      <b-container>
        <b-row>
          <b-col>
            <b-card-text>
              Exemple de texte de description
              <br>Titre :   {{ event.name }}
              <br>Adresse : {{ event.address }}
              <br>Flyer :   {{ event.flyer }}
              <br>Date :    {{ event.date }}
              <br><b-calendar id="ex-disabled-readonly" :disabled="true" :readonly="true" hide-header></b-calendar>
            </b-card-text>
          </b-col>
          <b-col>
            <img id="event-img" src="../assets/logo_SE.png"/>

            <b-row>
              <b-card-text>Liste des invités
                <b-button v-b-toggle.guests-collapse variant="primary">Afficher</b-button>
              </b-card-text>
            </b-row>

            <b-row>
              <b-collapse id="guests-collapse" class="mt-2">
                <b-card>Invités : 
                  <li v-for="guest in guests" :key="guest.id">
                    {{ guest.name }}
                  </li>
                </b-card>
              </b-collapse>
            </b-row>
            
            <b-card-text>
              <br>Type d'événement :  {{ event.type }}
              <br>Description :       {{ event.description }}
            </b-card-text>
            <b-row class="mt-3">
              <b-button variant="success" v-b-modal.accept_modal>Liste de courses</b-button>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
      
      <router-link to="/home">
        <b-button class="edit-button">Modifier</b-button>
      </router-link>
    </b-card>
  </b-col>

  <b-modal 
    id="accept_modal" 
    title="Liste de courses">
    <li v-for="item in items" :key="item.id">
      {{ item.name }}
    </li>
  </b-modal>

</b-form>
</template>

<script>
export default {
  name: "EventDetail",
  data() {
    return {
      guests: [ {name: "gui"}, {name: "jb"}],
      event: {
        id: 0,
        name: "Un événement",
        address: "Chez Etienne",
        flyer: "Flyer moche",
        date: "13/11/2020",
        type: "Apéro",
        description: "On casse tout chez Etienne !"
      },
      items: [ {name:"Coca"}, {name:"Whisky"}, {name:"Vodka"} ]
    }
  },
  created() {
    if (this.loggedIn) {
      console.log("Je suis connecté");
    } else {
      console.log("je ne suis pas connecté !");
      // this.$router.push(`/home`)
    }

    this.guests.push( 
      { name: "Etienne"},
      { name: "Yves"},
      { name: "Nary"}
    )
  },
};
</script>

<style scoped lang="scss">

h1,h2,h3,h4,h5,h6,p,span,button,a{
  font-family: 'Work Sans', sans-serif;
}

.card {
  background-color: $white !important;
  
}
label {
  display: block;
  margin-top: 10px;
}

.card-title{
  text-align : center;
  font-weight: $titleWeight;
  color : $green;
  margin-bottom: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
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
