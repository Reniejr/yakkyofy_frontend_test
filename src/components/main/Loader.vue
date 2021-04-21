<template>
  <div id="loader" v-if="this.$store.state.loader">
    <Vue1 class="major" />
    <Vue2 class="minor" />
    <h1>Loading...</h1>
  </div>
</template>
<script>
import Vue1 from "@/assets/Loader/Vue1.svg";
import Vue2 from "@/assets/Loader/Vue2.svg";

export default {
  name: "Loader",
  components: {
    Vue1,
    Vue2
  }
};
</script>
<style scoped lang="scss">
#loader {
  @include positions(absolute, 0, none, none, 0);
  width: 100%;
  background-color: rgba($color: $secondary, $alpha: 0.8);
  backdrop-filter: blur(10px);
  min-height: 100vh;
  overflow: hidden;
  z-index: 10000;
  svg {
    @include absoluteCenter();
    stroke-width: 4px;
    z-index: 2;
  }
  .major {
    width: 50vh;
    fill: $secondary;
    stroke: $primary;
    animation: major-entrance 5s linear infinite;
  }
  .minor {
    width: 30vh;
    fill: $primary;
    top: 41.3%;
    animation: minor-entrance 5s linear infinite;
  }
  @keyframes major-entrance {
    0% {
      top: 80%;
    }
    30% {
      top: 50%;
    }
    60% {
      top: 50%;
    }
    100% {
      top: 80%;
    }
  }
  @keyframes minor-entrance {
    0% {
      top: 15%;
    }
    30% {
      top: 41.3%;
    }
    60% {
      top: 41.3%;
    }
    100% {
      top: 15%;
    }
  }
  h1 {
    @include absoluteCenter();
    font-size: 1.8rem;
    color: $fifth;
    overflow: hidden;
    white-space: nowrap;
    animation: typing 5s steps(40, end) infinite;
    @keyframes typing {
      0% {
        max-width: 0px;
      }
      30% {
        max-width: 100%;
        opacity: 0;
      }
      31% {
        max-width: 100%;
        opacity: 1;
      }
      60% {
        max-width: 100%;
      }
      100% {
        max-width: 0%;
      }
    }
  }
}
</style>
