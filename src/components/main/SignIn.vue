<template>
  <teleport
    to=".modals"
    id="sign-in"
    class="modal"
    :style="{ marginTop: modal ? '' : '-300%' }"
  >
    <img src="@/assets/Vue-Logo.png" alt="" />
    <form class="guest-form">
      <button class="close-modal" @click="toggleModal" type="button">X</button>
      <h1 class="title">Welcome Back VUEser</h1>

      <div class="divider"></div>

      <div class="form-group">
        <label class="label" for="input">Email</label>
        <input class="input" v-model="user.email" required type="text" />
      </div>

      <div class="form-group">
        <label class="label" for="input">Password</label>
        <input class="input" v-model="user.password" required type="password" />
      </div>

      <button @click="submit">Login</button>
    </form>
  </teleport>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { login } from "@/utilities";

@Component({
  props: ["show"],
  computed: {
    modal() {
      return this.$store.state.showModal;
    }
  }
})
export default class SignIn extends Vue {
  user = {
    email: "",
    password: ""
  };

  async submit(e) {
    e.preventDefault();
    // const loggedUser = await login(this.user);
    const allUsers = this.$store.state.usersList;
    const loggedUser = allUsers.find(
      user =>
        user.email === this.user.email && user.password === this.user.password
    );
    if (loggedUser.id) {
      this.$router.push(`/user/${loggedUser.id}`);
    }
  }
  toggleModal() {
    this.$store.commit("toggleModal");
  }
}
</script>

<style scoped lang="scss">
#sign-in {
  width: 100%;
  min-height: 100vh;
  @include positions(absolute, 0, none, none, 0);
  @include flexBox(column, center, center);
  background-color: rgba($color: black, $alpha: 0.5);
  backdrop-filter: blur(10px);
  transition: margin-top 0.5s ease;
  img {
    @include positions(absolute, 5%, none, none, 20%);
    rotate: -40deg;
    width: 200px;
    z-index: 5;
  }
  .guest-form {
    position: relative;
    .close-modal {
      @include iconed-btn();
      background-color: $primary;
      color: #fff;
      border-color: $primary;
      @include positions(absolute, -10px, -10px, none, none);
      min-width: 0px;
      height: auto;
      &:hover {
        background-color: $secondary;
        color: $primary;
      }
    }
    max-width: 600px;
    padding: 100px;
  }
}
</style>
