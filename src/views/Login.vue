<template>
  <div class="col-md-12">
    <div id="test" class="card card-container">
      <img id="profile-img" src="../assets/logo_SE.png" class="profile-img-card" />

      <form name="form" @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">Email</label>
          <input
            v-model="user.email"
            type="text"
            class="form-control"
            name="username"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            v-model="user.password"
            type="password"
            class="form-control"
            name="password"
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block" :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Login</span>
          </button>
        </div>
        <a>Pas encore inscrit ? Rejoignez-nous !</a>
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </form>
      </div>
    </div>
</template>

<script>
import User from "../models/user"

export default {
  name: `Login`,
  data() {
    return {
      user: new User(``, ``),
      loading: false,
      message: ``
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push(`/home`)
    }
  },
  methods: {
    handleLogin() {
      this.loading = true
      if (this.user.email && this.user.password) {
        this.$store.dispatch(`auth/login`, this.user).then(
          () => {
            this.$router.push(`/Home`)
          },
          (error) => {
            this.loading = false
            this.message =
              (error.response && error.response.data) ||
              error.message ||
              error.toString()
          }
        )
      }
    }
  }
}
</script>


<style lang="scss" scoped>
a{
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  color: #E44FAA !important;
}
a:hover{
  color: #51C5B3 !important;
}



label {
  display: block;
  margin-top: 10px;
}


.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

#test{
  background-color: #FFFFFF;
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

.profile-img-card {
  width: 250px;
  height: 160px;
  margin: 0 auto 10px;
  display: block;
  border-radius: 5px;
}

.btn{
 background-color : #2A2B6C ;
 border-color: #2A2B6C;
}

.btn{
 background-color : #2A2B6C ;
 border-color: #2A2B6C;

}
 </style>
