<template>
  <div id="register" class="page">
    <img src="@/assets/Vue-Logo.png" alt="" />
    <form class="guest-form">
      <h1 class="title">Join the VUEsers</h1>
      <h3 class="sub-title">email: eve.holt@reqres.in</h3>
      <h3 class="sub-title">password: any not empty password</h3>

      <div class="divider"></div>

      <div class="form-group">
        <label class="label" for="input">First Name</label>
        <input class="input" v-model="user.firstName" required type="text" />
      </div>
      <div class="form-group">
        <label class="label" for="input">Last Name</label>
        <input class="input" v-model="user.lastName" required type="text" />
      </div>
      <div class="form-group">
        <label class="label" for="input">Email</label>
        <input class="input" v-model="user.email" required type="email" />
      </div>
      <div class="form-group">
        <label class="label" for="input">Password</label>
        <input class="input" v-model="user.password" required type="password" />
      </div>

      <button @click="submit">Join Us!</button>
    </form>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

//UTILITIES IMPORTS
import { createUser } from "@/utilities";

@Component
export default class Register extends Vue {
  user = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  async submit(e) {
    e.preventDefault();
    const newUser = await createUser(this.user);
    // console.log(newUser);
    this.$store.commit("setLoader");
    if (newUser) {
      this.$store.commit("addUser", newUser);
      this.$store.commit("setUser", newUser);
      localStorage.setItem(`user${newUser.id}`, newUser)
      setTimeout(() => {
        this.$store.commit("setLoader");
        this.$router.push(`/user/${newUser.id}`);
      }, 5000);
      // this.$router.push(`/`);
    }
  }
}
</script>

<style scoped lang="scss">
#register {
  img {
    @include positions(absolute, 10%, none, none, 10%);
    rotate: -50deg;
  }
  .guest-form {
    max-width: 700px;
    margin: auto;
    padding: 50px 100px;
    min-height: 100vh;
  }
}
</style>
