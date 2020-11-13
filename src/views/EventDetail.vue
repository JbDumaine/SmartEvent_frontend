<template>
<b-form name="form">
  <b-col cols="12" class="my-auto">
      <img id="logo-img" src="../assets/logo_SE.png"/>

    <b-card 
      title="Détails d'un événement"
      class="mb-2"
    >
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
              <br>Liste des invités <br>
              <b-button v-b-toggle.guests-collapse variant="primary">Afficher</b-button>
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
            
            <br>Type d'événement :  {{ event.type }}
            <br>Description :       {{ event.description }}
          </b-col>
        </b-row>
      </b-container>
      
      <router-link to="/home">
        <b-button class="edit-button">Modifier</b-button>
      </router-link>
    </b-card>
  </b-col>
</b-form>
</template>

<script>
export default {
  name: "EventDetail",
  data() {
    return {
      guests: [ {name: "gui"}, {name: "jb"}],
      event: {
        name: "Un événement",
        address: "Chez Etienne",
        flyer: "Flyer moche",
        date: "13/11/2020",
        type: "Apéro",
        description: "On casse tout chez Etienne !"
      }
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

.card {
  background-color: $white !important;
  
}
label {
  display: block;
  margin-top: 10px;
}

a {
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  color: $pink !important;
}
a:hover {
  color: $green !important;
  text-decoration: none;
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

</style>
