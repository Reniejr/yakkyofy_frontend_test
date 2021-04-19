<template>
  <form class="guest-form">
    <h1 class="title">Welcome back</h1>
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

<style lang="scss">
.guest-form {
  max-width: 500px;
  margin: 100px auto;

  .title {
    color: #243d56;
    font-size: 24px;
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
    margin-bottom: 1em;

    .label {
      display: block;
      margin-bottom: 0.25em;
    }

    .input {
      padding: 12px;
      width: 100%;
      border: 1px solid #eaeaea;
      border-radius: 3px;
      background-color: white;

      &:focus {
        border-color: gray;
      }

      &::placeholder {
        color: gray;
      }
    }
  }

  button {
    background-color: #243d56;
    border: none;
    border-radius: 3px;
    color: #fff;
    padding: 12px 22px;
  }
}
</style>
