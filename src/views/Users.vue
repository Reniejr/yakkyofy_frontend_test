<template>
  <div class="list-wrapper">
    <h1 class="title">Users list</h1>
    <div class="card" v-for="u in users" :key="u.id">
      <img :src="u.avatar" class="avatar" />

      <div class="info-wrapper">
        <p class="name">{{ u.first_name + ' ' + u.last_name }}</p>
        <p class="email">{{ u.email }}</p>

        <router-link class="button" to="">Details</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Users extends Vue {
  users = []

  mounted() {
    fetch('https://reqres.in/api/users', {
      method: 'GET',
      headers: { 'content-type': 'application/json' }
    })
      .then(response => response.json())
      .then(result => {
        console.log('Completed with result:', result)
        this.users = result.data
      })
  }
}
</script>

<style lang="scss" scoped>
.list-wrapper {
  max-width: 800px;
  margin: 0 auto;

  .title {
    margin: 32px 0px 12px 0px;
    font-size: 21px;
  }

  &::after {
    content: '';
    clear: both;
    display: block;
  }
  .card {
    width: 380px;
    float: left;
    border-radius: 3px;
    background: #eaeaea;
    padding: 12px;
    margin: 10px;
    box-shadow: 0px 0px 3px rgba($color: #000000, $alpha: 0.3);

    &::after {
      content: '';
      clear: both;
      display: block;
    }
    .avatar,
    .info-wrapper {
      float: left;
    }

    .avatar {
      max-width: 80px;
      margin-right: 12px;
    }

    .name {
      font-size: 16px;
    }
    .email {
      font-size: 14px;
      color: rgba($color: #000000, $alpha: 0.75);
    }

    .button {
      display: inline-block;
      text-decoration: none;
      margin-top: 12px;
      background-color: #243d56;
      border: none;
      border-radius: 3px;
      color: #fff;
      padding: 8px 12px;
      font-size: 12px;
    }
  }
}
</style>
