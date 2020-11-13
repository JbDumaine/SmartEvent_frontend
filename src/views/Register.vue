<template>
  <b-col cols="12" class="my-auto">
    <b-card title="Register">
      <b-form name="form" @submit.prevent="handleRegister">
        <div v-if="!successful">
          <div class="d-flex flex-column align-items-center">
            <label for="file-input">
            <img v-bind:src="previewImage" class="uploading-image mb-2"/>
            </label>
            <input id="file-input" type="file" accept="image/*" @change="uploadImage" />
          </div>
          <b-form-group label="First Name" label-for="userFirstName">
            <b-form-input
              id="userFirstName"
              v-model="user.first_name"
              type="text"
              required
              placeholder="Enter your First Name."
              class="form-control"
            />
          </b-form-group>
          <b-form-group label="Last Name" label-for="userLastName">
            <b-form-input
              id="userLastName"
              v-model="user.last_name"
              type="text"
              required
              placeholder="Enter your Last Name."
              class="form-control"
            />
          </b-form-group>
          <b-form-group label="Email" label-for="email">
            <b-form-input
              id="email"
              v-model="user.email"
              type="email"
              required
              placeholder="Enter your Email."
              class="form-control"
            />
          </b-form-group>
          <b-form-group label="Password" label-for="password">
            <b-form-input
              id="email"
              v-model="user.password"
              type="password"
              required
              placeholder="Enter your password."
              class="form-control"
            />
          </b-form-group>
          <b-form-group>
            <button class="btn btn-primary btn-block">Sign Up</button>
          </b-form-group>
          <div class="text-center">
            <router-link to="/login">Already have an account ?</router-link>
          </div>
        </div>
      </b-form>
      <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >
        {{ message }}
      </div>
    </b-card>
  </b-col>
</template>

<script>
import User from "../models/user";

export default {
  name: `Register`,
  data() {
    return {
      user: new User(``, ``, ``),
      submitted: false,
      successful: false,
      message: ``,
      previewImage: "//ssl.gstatic.com/accounts/ui/avatar_2x.png",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push(`/Home`);
    }
  },
  methods: {
    handleRegister() {
      this.message = ``;
      this.submitted = true;
      this.$store.dispatch(`auth/register`, this.user).then(
        (data) => {
          this.message = `id: ${data.id}, token: ${data.token}`;
          this.successful = true;
        },
        (error) => {
          this.message =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
          this.successful = false;
        }
      );
    },
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.previewImage = e.target.result;
        console.log(this.previewImage);
      };
    },
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

#file-input{
  display : none;
}
.card-title {
  text-align: center;
  font-weight: $titleWeight;
  color: $green;
  
  margin-bottom: 10px;
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
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  cursor: pointer;
}
</style>
