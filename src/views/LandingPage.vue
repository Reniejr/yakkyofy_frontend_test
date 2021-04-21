<template>
  <div id="landing-page">
    <div class="start">
      <img src="@/assets/Logo.png" alt="" class="logo" />
      <div class="controls">
        <h3>Welcome to Vue Users</h3>
        <router-link tag="button" to="/register">Join us</router-link>
        or
        <button @click="toggleModal">Login</button>
      </div>
    </div>
    <Slider />
  </div>
</template>
<script>
import Slider from "@/components/main/Slider.vue";
import { getFetch } from "@/utilities";

export default {
  name: "LandingPage",
  components: {
    Slider
  },
  methods: {
    toggleModal() {
      this.$store.dispatch("toggleModal");
    }
  }
};
</script>
<style scoped lang="scss">
#landing-page {
  background-color: $third;
  position: relative;
  min-height: 100vh;
  .start {
    @include absoluteCenter();
    min-height: 100vh;
    @include flexBox(column, center, center);
    img {
      background-color: $third;
      animation: logo-entrance 0.7s linear;
      transform-origin: 50% 50%;
      height: 375px;
      @keyframes logo-entrance {
        0% {
          transform: scale(0.8);
          z-index: 100;
        }
        90% {
          z-index: 100;
        }
        100% {
          transform: scale(1);
        }
      }
    }
    .controls {
      font-weight: 700;
      color: #fff;
      animation: appear 2s linear;
      h3 {
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }
      button {
        @include primary-btn();
      }
      @keyframes appear {
        0% {
          opacity: 0;
        }
        90% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
}
</style>
