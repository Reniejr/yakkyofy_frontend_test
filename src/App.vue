<template>
  <div id="app-wrapper">
    <router-view @showLogin="showLogin" />
    <SignIn :show="login" @showLogin="showLogin" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SignIn from "@/components/main/SignIn.vue";
import Users from "@/views/Users.vue";
import Loader from "@/components/main/Loader.vue";

@Component({
  components: { Users, SignIn, Loader }
})
export default class App extends Vue {
  login = false;

  showLogin() {
    this.login = !this.login;
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;600&display=swap");
* {
  font-family: "Roboto", sans-serif !important;
  box-sizing: border-box;
}
.page {
  background-color: $third;
  min-height: 100vh;
  position: relative;
}
.guest-form {
  background-color: #fff;
  .title {
    color: #243d56;
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 12px;
  }
  .sub-title {
    margin-top: 6px;
    font-size: 16px;
    color: grey;
  }
  .divider {
    border-top: 3px solid #243d56;
    max-width: 120px;
    margin: 18px 0px;
  }

  .form-group {
    @include primary-form-group();
  }

  button {
    @include primary-btn();
  }
}
</style>
