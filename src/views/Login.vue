<template>
  <div class="col-md-12">
    <div class="card card-container px-2 pt-0">
      <div class="card-title text-center">Login</div>
      <img
        id="profile-img"
        src="../assets/logo_SE.png"
        class="profile-img-card"
      />
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
        <div class="d-flex flex-column align-items-center">
          <router-link to="/register">Not subscribes ? Join us !</router-link>
        </div>
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
import User from "../models/user";

export default {
  name: `Login`,
  data() {
    return {
      user: new User(``, ``),
      loading: false,
      message: ``,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push(`/home`);
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      if (this.user.email && this.user.password) {
        this.$store.dispatch(`auth/login`, this.user).then(
          () => {
            this.$router.push(`/`);
          },
          (error) => {
            this.loading = false;
            this.message =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
          }
        );
      }
    },

    register() {
      this.$router.push("/register");
    },
  },
};
</script>


<style lang="scss" scoped>
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

label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
}

.card .card-container {
  background-color: $white;
}

.card {
  background-color: $white;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.5);
}
.card-title {
  font-weight: $titleWeight;
  font-size: 30px;
  color: $green;
}

.profile-img-card {
  width: 250px;
  height: 160px;
  margin: 0 auto 10px;
  display: block;
  border-radius: 5px;
}
</style>
