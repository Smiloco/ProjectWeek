
<template>
<nav class="navbar navbar-expand-sm navbar-dark bg-dark" role="navigation">
  <router-link to="/" >
  <a class="navbar-brand" href="#">
      <img src="./assets/kodama_logo_white.jpg" width="150" height="30" />
       </a>
    </router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="nav navbar-nav ml-auto">

    <li class="nav-item">
      <router-link
to="/Sos"
          class="nav-item" active-link="active"
          ><a  class="nav-link">Sos</a>
        </router-link>
        </li>


    <li class="nav-item">
      <router-link
to="/products"
          class="nav-item" active-link="active"
          ><a  class="nav-link">Store</a>
        </router-link>
        </li>
           <li class="nav-item" >
          <router-link to="/" tag="li" v-if="!isAuthenticated" class="nav-item">
            <a @click="onLoginClicked" class="nav-link">Login</a>
          </router-link>
        </li>

        <li v-if="isAuthenticated" class="li-pointer nav-item">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {{ getUserName() }}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Account Settings</a>
              <a @click="onLogoutClicked" class="dropdown-item">Logout {{ userEmail }}</a>
            </div>
          </div>
        </li>

        <li>
          <ShoppingCart />
        </li>
    </ul>
  </div>
</nav>
</template>

<script>
import ShoppingCart from "./ShoppingCart.vue";
export default {
  components: { ShoppingCart },
  name: "NavHeader",
  computed: {
    userEmail() {
      return this.isLoggedIn ? this.currentUser.email : "";
    },
    isAuthenticated() {
      return this.$store.state.user.isAuthenticated;
    },
  },
  methods: {
    onLoginClicked() {
      window.location = this.$store.state.endpoints.login;
    },
    onLogoutClicked() {
      this.$store.commit("logout");
    },
    getUserName() {
      return this.$store.state.user.name;
    },
  },
};
</script>

<style scoped>
.foto {
  width: 20%;
  margin: 0;
  text-align: left;
  padding: 0;
  padding: 0;
}

.nav-nopa {
  margin-left: 10%;
  font-size: 100%;
  
}

.nav-items {
  text-align: left;
}
.router-link-exact-active a {
  font-color:#FFFFFF;
}

</style>