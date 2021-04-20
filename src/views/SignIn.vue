<template>
  <div id="sign-in" class="page">
    <img src="@/assets/Vue-Logo.png" alt="" />
    <form class="guest-form">
      <h1 class="title">Join the VUEsers</h1>
      <h3 class="sub-title">email: eve.holt@reqres.in</h3>
      <h3 class="sub-title">password: any not empty password</h3>

      <div class="divider"></div>

      <div class="form-group">
        <label class="label" for="input">Email</label>
        <input class="input" v-model="email" required type="text" />
      </div>

      <div class="form-group">
        <label class="label" for="input">Password</label>
        <input class="input" v-model="password" required type="password" />
      </div>

      <button @click="submit">submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SignIn extends Vue {
  email = ''
  password = ''

  submit(e: Event) {
    e.preventDefault()

    fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: this.email,
        password: this.password
      })
    })
      .then(response => response.json())
      .then(result => {
        console.log('Completed with result:', result)
        // TODO: save token and redirect to users
      })
  }
}
</script>

<style scoped lang="scss">
#sign-in {
  img {
    @include positions(absolute, 10%, none, none, 10%);
    rotate: -50deg;
  }
  .guest-form {
    max-width: 700px;
    margin: auto;
    padding: 100px;

    background-color: #fff;
    min-height: 100vh;
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
}
</style>
