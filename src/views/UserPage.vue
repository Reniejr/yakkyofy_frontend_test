<template>
  <div id="user-page" class="page">
    <button class="logout-btn" @click="logout">
      Logout
      <Exit />
    </button>
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
import Exit from "@/assets/exit.svg";

export default {
  name: "UserPage",
  components: {
    AllUsers,
    Exit
  },
  computed: {
    user() {
      return this.$store.getters.currentUser;
    }
  },
  methods:{
    logout(){
      this.$router.push('/')
    }
  }
};
</script>
<style lang="scss">
#user-page {
  .logout-btn {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: 10%;
    @include general-btn();
    @include flexBox(row, space-between, center);
    padding: 10px;
    padding-left: 3rem;
    transition: all 0.3s ease;
    &:hover{
      right: 4%;
    }
    svg{
      width: 40px;
      height: 40px;
      margin-left: 1rem;
      fill: #fff;
    }
  }
  .wrapper {
    width: 70%;
    margin: 0 auto;
    background-color: #fff;
    min-height: 100vh;
    position: relative;
    z-index: 2;
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
          border-bottom: none;
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
