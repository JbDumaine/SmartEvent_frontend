<template>
  <div class="home">
    <Header/>
    <Carousel/>
    <div id="page-content">
      <h1>VOS EVENEMENTS</h1>
      <h4>Catégorie évènements</h4>
      <div id="card-wrapper">
        <b-card
        title="Nom évènement"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        >
        <div class="adr_container">
          <img src="../../public/img/icons/icons8-marker-50.png" alt="">
          <b-card-text class="event-adr">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>
        </div>
        <b-button href="#" class="event-btn" variant="primary">ACCEDER</b-button>
        </b-card>
        <b-card
        title="Nom évènement"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        >
        <div class="adr_container">
          <img src="../../public/img/icons/icons8-marker-50.png" alt="">
          <b-card-text class="event-adr">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>
        </div>
        <b-button href="#" class="event-btn" variant="primary">ACCEDER</b-button>
        </b-card><b-card
        title="Nom évènement"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        >
        <div class="adr_container">
          <img src="../../public/img/icons/icons8-marker-50.png" alt="">
          <b-card-text class="event-adr">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>
        </div>
        <b-button href="#" class="event-btn" variant="primary">ACCEDER</b-button>
        </b-card>
        <b-card
        title="Nom évènement"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        >
        <div class="adr_container">
          <img src="../../public/img/icons/icons8-marker-50.png" alt="">
          <b-card-text class="event-adr">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>
        </div>
        <b-button href="#" class="event-btn" variant="primary">ACCEDER</b-button>
        </b-card>
</div>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue"
import Carousel from "@/components/Carousel.vue"
import Footer from "@/components/Footer.vue"

export default {
  name: `Home`,
  components: {
    Header,
    Carousel,
    Footer
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push(`/welcome`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300&display=swap');
h1,h2,h3,h4,h5,h6,p,span,button,a{
  font-family: 'Work Sans', sans-serif;
}

#page-content{
  padding: 2%;
}

#card-wrapper{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.event-btn{
  background: $green !important;
  border: none;
  position: absolute;
  bottom: 0px;
  width: 100%;
  left: 0px;
  border-radius: 0px;
}

.adr_container{
  display: flex;
  align-items: center;
}

.adr_container > img{
  width: 20px;
  height: 20px;
  margin-bottom: 2rem;
  margin-right: 10px;
}

.event-adr{
  margin-bottom: 2rem !important;
}
</style>
