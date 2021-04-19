<template>
  <div id="app-wrapper">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SignIn from '@/views/SignIn.vue'
import Users from '@/views/Users.vue'

@Component({
  components: { Users, SignIn }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;600&display=swap');
* {
  font-family: 'Roboto', sans-serif !important;
  box-sizing: border-box;
}
</style>
