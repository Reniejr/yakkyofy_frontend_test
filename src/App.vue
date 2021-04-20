<template>
  <div id="app-wrapper">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SignIn from '@/views/SignIn.vue'
import Users from '@/views/Users.vue'
import Loader from '@/components/main/Loader.vue'

@Component({
  components: { Users, SignIn, Loader }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;600&display=swap');
* {
  font-family: 'Roboto', sans-serif !important;
  box-sizing: border-box;
}
.page{
  background-color: $third;
  min-height: 100vh;
  position: relative;
}
</style>
