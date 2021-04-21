<template>
  <div id="user-page" class="page">
    <div class="wrapper">
      <div id="user-info">
        <img src="@/assets/user-avatar.png" :alt="user.first_name" />
        <div class="info">
          <h2>{{ user.first_name }}</h2>
          <h2>{{ user.last_name }}</h2>
          <p></p>
        </div>
        <div class="certified">
          <p>Certified By</p>
          <img src="@/assets/Vue-Logo.png" alt="" />
        </div>
      </div>
      <AllUsers />
    </div>
  </div>
</template>
<script>
import AllUsers from "@/components/main/AllUsers";

export default {
  name: "UserPage",
  components: {
    AllUsers
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>
<style lang="scss">
#user-page {
  .wrapper {
    width: 70%;
    margin: 0 auto;
    background-color: #fff;
    min-height: 100vh;
    #user-info {
      @include flexBox(row, none, center);
      padding: 1rem;
      margin: 0 1rem;
      position: relative;
      img {
        width: 200px;
        margin-right: 1rem;
      }
      .info {
        h2 {
          font-size: 1.5rem;
        }
      }
      border-bottom: 4px solid $secondary;
      .certified {
        @include flexBox(column, none, center);
        margin-left: auto;
        p {
          margin-bottom: 0.5rem;
        }
        img {
          width: 150px !important;
        }
      }
    }
  }
}
</style>
