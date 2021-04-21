<template>
  <div id="app-wrapper">
    <router-view />
    <SignIn />
    <Loader />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SignIn from "@/components/main/SignIn.vue";
import Users from "@/views/Users.vue";
import Loader from "@/components/main/Loader.vue";
import UserPage from "@/views/UserPage.vue";
import { getFetch, getFromLocal } from "@/utilities/index.js";

@Component({
  components: { Users, SignIn, Loader, UserPage },
  updated() {
    (async () => {
      const result = await getFetch("/users", null);
      if (result.total_pages > 0) {
        let allUsers: Array<any> = [];
        for (let i = 0; i < result.total_pages; i++) {
          const result2 = await getFetch("/users", i + 1);
          allUsers = [...allUsers, ...result2.data];
        }
        const newUsers = getFromLocal();
        console.log(newUsers)
        if (newUsers.length > 0) {
          const completeUsers = [...allUsers, ...newUsers];
          this.$store.commit("setUsersList", completeUsers);
        } else {
          this.$store.commit("setUsersList", allUsers);
        }
      }
    })();
  }
})
export default class App extends Vue {}
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
